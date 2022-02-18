<template>
  <v-card flat class="pa-3 mt-2">
    <h2 class="pa-3">Add New Volunteer</h2>
    <img src="img" style="height:500px;" id="img-src"></img>
    <!-- upload photo -->
    <div>
      <v-btn class="bg-gradient-primary white--text me-3 mt-5" @click="$refs.refInputEl.click()">
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
          <v-col md="12" cols="12" >
            <v-text-field color="success" v-model="accountDataLocale.name" label="Name" dense outlined></v-text-field>
          </v-col>
           <v-col md="12" cols="12">
            <v-text-field color="success" v-model="accountDataLocale.country" label="Country" dense outlined></v-text-field>
          </v-col>
          <v-col  cols="12">
            <v-textarea color="success" v-model="accountDataLocale.text" outlined rows="3" label="Description"></v-textarea>
          </v-col>
          <v-btn  class="bg-gradient-primary white--text" @click="sendData">
            Submit
          </v-btn>

          <v-btn color="error" type="reset" outlined class="mx-2" @click="resetForm()">
            Reset
          </v-btn>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiAlertOutline, mdiCloudUploadOutline } from '@mdi/js'
export default {
  props: {
    accountData: {
      type: Object,
      default: () => {},
    }
  },
  setup(props) {
    const status = ['Active', 'Inactive', 'Pending', 'Closed'];
    const accountDataLocale = {};

    var img = '#'

    const resetForm = () => {
      accountDataLocale.value = {};
      document.getElementById("img-src").src = "#";
    }

    const previewImg = (e) => {
      var [file] = e.target.files;
      img = URL.createObjectURL(file);
      document.getElementById("img-src").src = img;
    }

    const resetImg = (e)=>{
      document.getElementById("img-src").src = "#"
    }

    const sendData = (e) => {
      Vue.swal({
        title: 'Are you sure ?',
        text: "This volunteer will be public",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes Add it!',
        cancelButtonText: 'No, leave it!',
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then(result => {
        if (result.value) {
          var file = document.getElementById("file-input").files[0];
          var fd = new FormData();

          fd.append("name",accountDataLocale.name);
          fd.append("country",accountDataLocale.country);
          fd.append("text",accountDataLocale.text);
          fd.append("image",file);
          
          var xhr = new XMLHttpRequest();
          xhr.open('POST', 'https://slukatbali.or.id:7177/admin/slukat/testi/volounteer', true);
          xhr.send(fd);

          Vue.swal('Added', 'You successfully Added this volunteer', 'success').then(function(){
            window.location.pathname = "/activities";
          })
          
        } else {
          Vue.swal('Cancelled', 'Failed to add volunteer', 'info')
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
