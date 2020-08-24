<template>
  <div class="home">
    <div class="table"><Table/></div>
    <div class="upload"><Upload :disabled="data.disabled"/></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Upload from "@/components/Upload.vue";
import Table from "@/components/Table.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Upload,
    Table
  },
  computed: {
    ...mapState(["data"])
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapActions("data", ["fetchData"])
  }
};
</script>

<style scoped>
.home{
  margin: 0 auto;
  background-color: #dae2f3;
  padding: 20px;
  width: 80%;
}
.table{
  background-color: #b5c6e7;
  margin: 0 auto; 
}
.upload{
  background-color: #b5c6e7;
  margin: 0 auto; 
  padding: 10px;
}
</style>
