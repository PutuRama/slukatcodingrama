<template>
  <div>
    <router-link to="/volunteer/add">
      <plus-button></plus-button>
    </router-link>
    <v-row>
      <v-col md="4" sm="6" cols="12" class="align-self-start" v-for="activity in activities">
        <v-card>
          <v-img src="@/assets/images/pages/card-basic-person.png" height="250"></v-img>
          <v-card-title>
            {{ activity.title }}
          </v-card-title>
          <v-card-text>
            {{ activity.createdAt }}
          </v-card-text>
          <v-card-actions class="dense">
            <v-btn color="primary" text>
              Details
            </v-btn>
            <v-btn text :id="activity.id" @click="deleteActivity">
              <span @click="deleteActivity" :id="activity.id">Delete</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import {
  mdiChevronUp,
  mdiChevronDown,
  mdiCartPlus,
  mdiShareVariantOutline,
  mdiLockOpenOutline,
  mdiStarOutline,
  mdiAccountOutline,
  mdiTrendingUp,
  mdiHelpCircleOutline,
} from '@mdi/js'
import axios from 'axios'
import PlusButton from '../../../components/PlusButton.vue'
import Vue from 'vue'

export default {
  components: { PlusButton },
  setup() {
    const isCardDetailsVisible = true
    const rating = ref(5)
    const activities = null

    const deleteActivity = e => {
      var xhr = new XMLHttpRequest()
      xhr.open('DELETE', 'http://localhost:5000/admin/slukat/activity/' + e.target.id, true)
      console.log(e.target)
      xhr.onload = function() {
        axios
          .get('http://localhost:5000/api/slukat/activity')
          .then(response => {
            this.activities = response.data.data
          })
          .catch(error => {
            console.log(error)
          })
      }

      Vue.swal({
        title: 'Are you sure want to delete this activity?',
        text: "You can't revert your action",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes Delete it!',
        cancelButtonText: 'No, Keep it!',
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then(result => {
        if (result.value) {
          xhr.send()
          Vue.swal('Deleted', 'You successfully deleted this file', 'success')
        } else {
          Vue.swal('Cancelled', 'Your file is still intact', 'info')
        }
      })
    }

    return {
      isCardDetailsVisible,
      rating,
      activities,
      deleteActivity,

      // icons
      icons: {
        mdiChevronUp,
        mdiChevronDown,
        mdiCartPlus,
        mdiShareVariantOutline,
        mdiLockOpenOutline,
        mdiStarOutline,
        mdiAccountOutline,
        mdiTrendingUp,
        mdiHelpCircleOutline,
      },
    }
  },
  mounted() {
    axios
      .get('http://localhost:5000/api/slukat/activity')
      .then(response => {
        this.activities = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
  },
}
</script>

<style></style>
