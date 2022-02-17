<template>
  <div>
    <router-link to="/volunteer/add">
      <plus-button></plus-button>
    </router-link>
    <v-row>
      

      
       <v-col
        md="4"
        sm="6"
        cols="12"
        class="align-self-start"
      >
        <v-card>
          <v-img
            src="@/assets/images/pages/card-basic-person.png"
            height="250"
          ></v-img>
          <v-card-actions class="dense">
            <v-btn
              color="success"
              text
            >
              Details
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              icon
              @click="isCardDetailsVisible = !isCardDetailsVisible"
            >
              <v-icon>{{ isCardDetailsVisible ? icons.mdiChevronUp : icons.mdiChevronDown }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-title>
            Popular Uses Of The Internet
          </v-card-title>
          <v-expand-transition>
            <div v-show="isCardDetailsVisible">
              <v-divider></v-divider>
              <v-card-text>
                Netherland
              </v-card-text>
              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
              <v-col md="4" sm="6" cols="12" class="align-self-start" v-for="volunter in volunteers">
                <v-card>
                  <v-img src="@/assets/images/pages/card-basic-person.png" height="250"></v-img>
                    <v-card-text>
                      {{ volunter.country }}
                    </v-card-text>
                  <v-card-title>
                    {{ volunter.title }}
                  </v-card-title>
                  <v-card-text>
                    {{ volunter.createdAt }}
                  </v-card-text>
                  <v-card-actions class="dense">
                    <v-btn color="success" text>
                      Details
                    </v-btn>
                    <v-btn text :id="volunter.id" @click="deleteVolunteer">
                      <span @click="deleteVolunteer" :id="volunter.id">Delete</span>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>

      
       <v-col
        md="4"
        sm="6"
        cols="12"
        class="align-self-start"
      >
        <v-card>
          <v-img
            src="@/assets/images/pages/card-basic-person.png"
            height="250"
          ></v-img>
          <v-card-actions class="dense">
            <v-btn
              color="success"
              text
            >
              Details
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              icon
              @click="isCardDetailsVisible = !isCardDetailsVisible"
            >
              <v-icon>{{ isCardDetailsVisible ? icons.mdiChevronUp : icons.mdiChevronDown }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-title>
            Popular Uses Of The Internet
          </v-card-title>
          <v-expand-transition>
            <div v-show="isCardDetailsVisible">
              <v-divider></v-divider>
              <v-card-text>
                Netherland
              </v-card-text>
              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
              <v-col md="4" sm="6" cols="12" class="align-self-start" v-for="volunter in volunteers">
                <v-card>
                  <v-img src="@/assets/images/pages/card-basic-person.png" height="250"></v-img>
                    <v-card-text>
                      {{ volunter.country }}
                    </v-card-text>
                  <v-card-title>
                    {{ volunter.title }}
                  </v-card-title>
                  <v-card-text>
                    {{ volunter.createdAt }}
                  </v-card-text>
                  <v-card-actions class="dense">
                    <v-btn color="success" text>
                      Details
                    </v-btn>
                    <v-btn text :id="volunter.id" @click="deleteVolunteer">
                      <span @click="deleteVolunteer" :id="volunter.id">Delete</span>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>


       <v-col
        md="4"
        sm="6"
        cols="12"
        class="align-self-start"
      >
        <v-card>
          <v-img
            src="@/assets/images/pages/card-basic-person.png"
            height="250"
          ></v-img>
          <v-card-actions class="dense">
            <v-btn
              color="success"
              text
            >
              Details
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              icon
              @click="isCardDetailsVisible = !isCardDetailsVisible"
            >
              <v-icon>{{ isCardDetailsVisible ? icons.mdiChevronUp : icons.mdiChevronDown }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-title>
            Popular Uses Of The Internet
          </v-card-title>
          <v-expand-transition>
            <div v-show="isCardDetailsVisible">
              <v-divider></v-divider>
              <v-card-text>
                Netherland
              </v-card-text>
              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
              <v-col md="4" sm="6" cols="12" class="align-self-start" v-for="volunter in volunteers">
                <v-card>
                  <v-img src="@/assets/images/pages/card-basic-person.png" height="250"></v-img>
                    <v-card-text>
                      {{ volunter.country }}
                    </v-card-text>
                  <v-card-title>
                    {{ volunter.title }}
                  </v-card-title>
                  <v-card-text>
                    {{ volunter.createdAt }}
                  </v-card-text>
                  <v-card-actions class="dense">
                    <v-btn color="success" text>
                      Details
                    </v-btn>
                    <v-btn text :id="volunter.id" @click="deleteVolunteer">
                      <span @click="deleteVolunteer" :id="volunter.id">Delete</span>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>


       <v-col
        md="4"
        sm="6"
        cols="12"
        class="align-self-start"
      >
        <v-card>
          <v-img
            src="@/assets/images/pages/card-basic-person.png"
            height="250"
          ></v-img>
          <v-card-actions class="dense">
            <v-btn
              color="success"
              text
            >
              Details
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              icon
              @click="isCardDetailsVisible = !isCardDetailsVisible"
            >
              <v-icon>{{ isCardDetailsVisible ? icons.mdiChevronUp : icons.mdiChevronDown }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-title>
            Popular Uses Of The Internet
          </v-card-title>
          <v-expand-transition>
            <div v-show="isCardDetailsVisible">
              <v-divider></v-divider>
              <v-card-text>
                Netherland
              </v-card-text>
              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
              <v-col md="4" sm="6" cols="12" class="align-self-start" v-for="volunter in volunteers">
                <v-card>
                  <v-img src="@/assets/images/pages/card-basic-person.png" height="250"></v-img>
                    <v-card-text>
                      {{ volunter.country }}
                    </v-card-text>
                  <v-card-title>
                    {{ volunter.title }}
                  </v-card-title>
                  <v-card-text>
                    {{ volunter.createdAt }}
                  </v-card-text>
                  <v-card-actions class="dense">
                    <v-btn color="success" text>
                      Details
                    </v-btn>
                    <v-btn text :id="volunter.id" @click="deleteVolunteer">
                      <span @click="deleteVolunteer" :id="volunter.id">Delete</span>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>


       <v-col
        md="4"
        sm="6"
        cols="12"
        class="align-self-start"
      >
        <v-card>
          <v-img
            src="@/assets/images/pages/card-basic-person.png"
            height="250"
          ></v-img>
          <v-card-actions class="dense">
            <v-btn
              color="success"
              text
            >
              Details
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              icon
              @click="isCardDetailsVisible = !isCardDetailsVisible"
            >
              <v-icon>{{ isCardDetailsVisible ? icons.mdiChevronUp : icons.mdiChevronDown }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-title>
            Popular Uses Of The Internet
          </v-card-title>
          <v-expand-transition>
            <div v-show="isCardDetailsVisible">
              <v-divider></v-divider>
              <v-card-text>
                Netherland
              </v-card-text>
              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
              <v-col md="4" sm="6" cols="12" class="align-self-start" v-for="volunter in volunteers">
                <v-card>
                  <v-img src="@/assets/images/pages/card-basic-person.png" height="250"></v-img>
                    <v-card-text>
                      {{ volunter.country }}
                    </v-card-text>
                  <v-card-title>
                    {{ volunter.title }}
                  </v-card-title>
                  <v-card-text>
                    {{ volunter.createdAt }}
                  </v-card-text>
                  <v-card-actions class="dense">
                    <v-btn color="success" text>
                      Details
                    </v-btn>
                    <v-btn text :id="volunter.id" @click="deleteVolunteer">
                      <span @click="deleteVolunteer" :id="volunter.id">Delete</span>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>


       <v-col
        md="4"
        sm="6"
        cols="12"
        class="align-self-start"
      >
        <v-card>
          <v-img
            src="@/assets/images/pages/card-basic-person.png"
            height="250"
          ></v-img>
          <v-card-actions class="dense">
            <v-btn
              color="success"
              text
            >
              Details
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              icon
              @click="isCardDetailsVisible = !isCardDetailsVisible"
            >
              <v-icon>{{ isCardDetailsVisible ? icons.mdiChevronUp : icons.mdiChevronDown }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-title>
            Popular Uses Of The Internet
          </v-card-title>
          <v-expand-transition>
            <div v-show="isCardDetailsVisible">
              <v-divider></v-divider>
              <v-card-text>
                Netherland
              </v-card-text>
              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
              <v-col md="4" sm="6" cols="12" class="align-self-start" v-for="volunter in volunteers">
                <v-card>
                  <v-img src="@/assets/images/pages/card-basic-person.png" height="250"></v-img>
                    <v-card-text>
                      {{ volunter.country }}
                    </v-card-text>
                  <v-card-title>
                    {{ volunter.title }}
                  </v-card-title>
                  <v-card-text>
                    {{ volunter.createdAt }}
                  </v-card-text>
                  <v-card-actions class="dense">
                    <v-btn color="success" text>
                      Details
                    </v-btn>
                    <v-btn text :id="volunter.id" @click="deleteVolunteer">
                      <span @click="deleteVolunteer" :id="volunter.id">Delete</span>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              </v-card-text>
            </div>
          </v-expand-transition>
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
    const isCardDetailsVisible = false
    const rating = ref(5)
    const volunteers = null

    const deleteVolunteer = e => {
      var xhr = new XMLHttpRequest()
      xhr.open('DELETE', 'http://localhost:5000/admin/slukat/volunter/' + e.target.id, true)
      console.log(e.target)
      xhr.onload = function() {
        axios
          .get('http://localhost:5000/api/slukat/volunter')
          .then(response => {
            this.volunteers = response.data.data
          })
          .catch(error => {
            console.log(error)
          })
      }

      Vue.swal({
        title: 'Are you sure want to delete this volunter?',
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
      volunteers,
      deleteVolunteer,
      

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
      .get('http://localhost:5000/api/slukat/volunter')
      .then(response => {
        this.volunteers = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
  },
}
</script>

<style></style>
