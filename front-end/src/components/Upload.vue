<template>
  <div style="display: table;margin: 0 auto;">
    <!-- Styled -->
    <input ref="file" id="fileUpload" type="file" @change="post" v-show="false">
    <button @click="chooseFile" :disabled="data.disabled" class="button">Upload</button>
    <!-- <b-form-file
      v-model="file"
      placeholder=""
      browse-text="Upload" 
      @input="post()"
      :disabled="data.disabled"
    ></b-form-file> -->
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import moment from 'moment';
import axios from "axios";

export default {
  name: "Upload",
  computed: {
    ...mapState(["data"])
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
        file: {}
    }
  },
  methods: {
    ...mapActions("data", ["fetchData"]),
    ...mapActions(["publishData"]),
    post() {
        const file = this.$refs.file.files[0];
        this.file = file;
        var filedata = {}
        if(this.file){
          filedata.fileName = this.file.name;
          filedata.size = this.file.size;
          filedata.dateModified = moment(this.file.lastModified).format('YYYY-MM-DDTHH:mm:ss');
          axios.post( 'http://localhost:8080/fileupload/add',
                filedata,
                {
                headers: {
                    'Content-Type': "application/json"
                }
              }
            ).then(function(){
            console.log('Post SUCCESS!!');
        })
        .catch(function(error){
          console.log(error);
        });
        }
        this.fetchData();
    },
    chooseFile() {
      document.getElementById('fileUpload').click();
    }
  }
};
</script>
<style scoped>
.button{
  background-color: #4472c4 ;
  border-radius: 7px;
}
</style>
