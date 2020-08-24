<template>
  <div class="home">
    <Upload :disabled="data.disabled"/>
    <Table/>
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
