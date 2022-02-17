<template>
  <v-card flat class="pa-3 mt-2">
    <h2 class="pa-3">Add New Activity</h2>
    <img src="img" style="height:500px;" id="img-src"></img>
    <!-- upload photo -->
    <div>
      <v-btn color="primary" class="me-3 mt-5" @click="$refs.refInputEl.click()">
        <v-icon class="d-sm-none">
          {{ icons.mdiCloudUploadOutline }}
        </v-icon>
        <span class="d-none d-sm-block">Upload new photo</span>
      </v-btn>

      <input ref="refInputEl" id="file-input" type="file" accept=".jpeg,.png,.jpg,GIF" @change="previewImg" :hidden="true" />

      <v-btn color="error" outlined class="mt-5" @click="resetImg">
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
            <v-text-field v-model="accountDataLocale.title" label="Title Activity" dense outlined></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea v-model="accountDataLocale.desc" outlined rows="3" label="Description"></v-textarea>
          </v-col>
          <v-btn color="primary" @click="sendData">
            Submit
          </v-btn>

          <v-btn type="reset" outlined class="mx-2" @click="resetForm()">
            Reset
          </v-btn>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiAlertOutline, mdiCloudUploadOutline } from '@mdi/js'
import Vue from 'vue'
export default {
  props: {
    accountData: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const status = ['Active', 'Inactive', 'Pending', 'Closed']

    const accountDataLocale = {}

    var img = '#'

    const resetForm = () => {
      accountDataLocale.value = {}
      document.getElementById("img-src").src = "#"
    }

    const previewImg = (e) => {
      console.log(e);
      var [file] = e.target.files
      img = URL.createObjectURL(file)
      
      document.getElementById("img-src").src = img
      console.log(img);
    }

    const resetImg = (e)=>{
      document.getElementById("img-src").src = "#"
    }

    const sendData = (e) => {
      Vue.swal({
        title: 'Are you sure ?',
        text: "This activity will be public",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes Add it!',
        cancelButtonText: 'No, leave it!',
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then(result => {
        if (result.value) {
          var file = document.getElementById("file-input").files[0]
          var fd = new FormData();

          fd.append("title",accountDataLocale.title)
          fd.append("description",accountDataLocale.desc)
          fd.append("image",file)

          var xhr = new XMLHttpRequest();
          xhr.open('POST', 'http://103.179.57.47:5000/admin/slukat/activity', true);
          xhr.send(fd);

          Vue.swal('Added', 'You successfully Added this activity', 'success').then(function(){
            window.location.pathname = "/activities";
          })
          
        } else {
          Vue.swal('Cancelled', 'Failed to add activity', 'info')
        }
      })
    }
    return {
      status,
      accountDataLocale,
      resetForm,
      previewImg, 
      resetImg,
      sendData,
      img,
      icons: {
        mdiAlertOutline,
        mdiCloudUploadOutline,
      },
    }
  },
}
</script>
