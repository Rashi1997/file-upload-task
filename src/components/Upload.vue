<template>
  <div>
    <!-- Styled -->
    <b-form-file
      v-model="file"
      :state="Boolean(file)"
      placeholder="Upload"
      drop-placeholder=""
      @change="post(file)"
    ></b-form-file>
    {{ file ? file.lastModifiedDate : '' }}
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Upload",
  data() {
    return {
        file: null
    }
  },
  methods: {
    ...mapActions(["publishData"]),
    post: function (file) {
        var data = {}
        data.name = file.name;
        data.size = file.size;
        data.lastModified = file.lastModifiedDate;
        this.$store.state.file = data;
    }
  }
};
</script>
