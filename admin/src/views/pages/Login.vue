<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-7">
          <router-link to="/" class="d-flex align-center">
            <v-img
              :src="require('@/assets/images/logos/slc_logo.png')"
              max-height="60px"
              max-width="60px"
              alt="logo"
              contain
              class="me-3 "
            ></v-img>
          </router-link>
        </v-card-title>

        <!-- title -->
        <v-card-text>
          <p class="text-2xl font-weight-semibold text--primary mb-2 text-center">
            Login
          </p>
          <p class="mb-2 text-center">
            Please sign-in to your account and start the adventure
          </p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="username"
              color="success"
              outlined
              label="username"
              placeholder="Username"
              hide-details
              class="mb-3"
            ></v-text-field>

            <v-text-field
              color="success"
              v-model="password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Password"
              placeholder="············"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>

            <div class="d-flex align-center justify-space-between flex-wrap">
              <v-checkbox
               color="success"
                label="Remember Me"
                hide-details
                class="me-3 mt-1"
              >
              </v-checkbox>

              <!-- forgot link -->
              <a
     
                href="javascript:void(0)"
                class="mt-1"
                style="color: var(--v-success-base) !important"
              >
                Forgot Password?
              </a>
            </div>

            <v-btn block color="success" class="mt-6" @click="login">
              Login
            </v-btn>
          </v-form>
        </v-card-text>

        <!-- create new account  -->
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2">
            New on our platform?
          </span>
          <router-link  :to="{name:'pages-register'}" style="color: var(--v-success-base) !important">
            Create an account
          </router-link>
        </v-card-text>

        <!-- divider -->
        <v-card-text class="d-flex align-center mt-2">
          <v-divider></v-divider>
          <span class="mx-5">or</span>
          <v-divider></v-divider>
        </v-card-text>

        <!-- social links -->
        <v-card-actions class="d-flex justify-center">
          <v-btn v-for="link in socialLink" :key="link.icon" icon class="ms-1">
            <v-icon :color="$vuetify.theme.dark ? link.colorInDark : link.color">
              {{ link.icon }}
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <!-- background triangle shape  -->
    <img
      class="auth-mask-bg"
      height="173"
      :src="require(`@/assets/images/misc/mask-${$vuetify.theme.dark ? 'dark' : 'light'}.png`)"
    />

    <!-- tree -->
    <v-img
      class="auth-tree mb-10"
      width="247"
      height="200"
      src="@/assets/images/misc/Together.png"
    ></v-img>

    <!-- tree  -->
    <v-img
      class="auth-tree-3 mb-13"
      width="300"
      height="250"
      src="@/assets/images/misc/outdoor.png"
    ></v-img>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiFacebook, mdiYoutube, mdiInstagram, mdiGoogle, mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'
import Axios from 'axios'
import Vue from 'vue'
export default {
  setup() {
    const isPasswordVisible = ref(false)
    const username = ref(null)
    const password = ref(null)

    const login = function() {
      let data = {
        username: this.username,
        password: this.password,
      }

      Axios.post('http://103.179.57.47:5000/admin/auth/login', data).then(response => {
        if (response.data.ok) {
          Vue.cookie.set('authToken', response.data.data.token);
          window.location.pathname = '/'
        } else {
          Vue.swal({
            title: 'Login Failed',
            text: "Your account or password maybe worng",
            type: 'error'
          })
        }
      })
    }

    const socialLink = [
      {
        icon: mdiFacebook,
        color: '#4267b2',
        colorInDark: '#4267b2',
      },
      {
        icon: mdiInstagram,
        color: '#9d36dd',
        colorInDark: '#db4437',
      },
      {
        icon: mdiYoutube,
        color: '#db4437',
        colorInDark: '#4267b2',

      }
    ]

    return {
      isPasswordVisible,
      username,
      password,
      socialLink,
      login,

      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
    }
  },
}
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
