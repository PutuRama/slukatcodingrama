<template>
  <v-card flat class="pa-3 mt-2">
    <h2 class="pa-3">Banner Home Slukat</h2>
    <v-img :src="accountDataLocale.avatarImg" style="height:500px;"></v-img>
    <!-- upload photo -->
    <div>
      <v-btn color="primary" class="me-3 mt-5" @click="$refs.refInputEl.click()">
        <v-icon class="d-sm-none">
          {{ icons.mdiCloudUploadOutline }}
        </v-icon>
        <span class="d-none d-sm-block">Upload new photo</span>
      </v-btn>

      <input ref="refInputEl" type="file" accept=".jpeg,.png,.jpg,GIF" :hidden="true" />

      <v-btn color="error" outlined class="mt-5">
        Reset
      </v-btn>
      <p class="text-sm mt-5">
        Allowed JPG, GIF or PNG. Max size of 800K
      </p>
    </div>

    <v-card-text>
      <v-form class="multi-col-validation mt-6">
        <v-row>
          <v-col md="12" cols="12">
            <v-text-field v-model="accountDataLocale.username" label="Title On Banner" dense outlined></v-text-field>
          </v-col>

          <v-col md="6" cols="12">
            <v-text-field v-model="accountDataLocale.name" label="Title on About" dense outlined></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field v-model="accountDataLocale.email" label="Desc on About" dense outlined></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-img :src="accountDataLocale.avatarImg" style="height:500px;"></v-img>
            <!-- upload photo -->
            <div>
              <v-btn color="primary" class="me-3 mt-5" @click="$refs.refInputEl.click()">
                <v-icon class="d-sm-none">
                  {{ icons.mdiCloudUploadOutline }}
                </v-icon>
                <span class="d-none d-sm-block">Upload new Photo Founder</span>
              </v-btn>

              <input ref="refInputEl" type="file" accept=".jpeg,.png,.jpg,GIF" :hidden="true" />

              <v-btn color="error" outlined class="mt-5">
                Reset
              </v-btn>
              <p class="text-sm mt-5">
                Allowed JPG, GIF or PNG. Max size of 800K
              </p>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field v-model="accountDataLocale.company" dense outlined label="Founder's Name"></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-text-field
                  v-model="accountDataLocale.company"
                  dense
                  outlined
                  label="Founder Description"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="accountDataLocale.email"
              label="Our Program Title"
              dense
              outlined
            ></v-text-field> </v-col
          ><v-col cols="12" md="6">
            <v-text-field v-model="accountDataLocale.email" label="Our Program Desc" dense outlined></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="accountDataLocale.email"
              label="Student Volounteer Title"
              dense
              outlined
            ></v-text-field> </v-col
          ><v-col cols="12" md="6">
            <v-text-field v-model="accountDataLocale.email" label="Student Volounteer Desc" dense outlined></v-text-field>
          </v-col>
<!-- 
          <v-col cols="12" md="6">
            <v-select v-model="accountDataLocale.status" dense outlined label="Status" :items="status"></v-select>
          </v-col> -->

          <!-- alert -->
          <v-col cols="12">
            <v-alert color="warning" text class="mb-0">
              <div class="d-flex align-start">
                <v-icon color="warning">
                  {{ icons.mdiAlertOutline }}
                </v-icon>

                <div class="ms-3">
                  <p class="text-base font-weight-medium mb-1">
                    Please becarefull when you edit this setting
                  </p>
                  <a href="javascript:void(0)" class="text-decoration-none warning--text">
                    <span class="text-sm">If there is a problem , please contact the developer</span>
                  </a>
                </div>
              </div>
            </v-alert>
          </v-col>

          <v-col cols="12">
            <v-btn color="primary" class="me-3 mt-4">
              Save changes
            </v-btn>
            <v-btn color="secondary" outlined class="mt-4" type="reset" @click.prevent="resetForm">
              Cancel
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiAlertOutline, mdiCloudUploadOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  props: {
    accountData: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const status = ['Active', 'Inactive', 'Pending', 'Closed']

    const accountDataLocale = ref(JSON.parse(JSON.stringify(props.accountData)))

    const resetForm = () => {
      accountDataLocale.value = JSON.parse(JSON.stringify(props.accountData))
    }

    return {
      status,
      accountDataLocale,
      resetForm,
      icons: {
        mdiAlertOutline,
        mdiCloudUploadOutline,
      },
    }
  },
}
</script>
