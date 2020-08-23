<template>
  <div class="home">
    <Upload/>
    <Table/>
  </div>
</template>

<script>
// @ is an alias to /src
import Upload from "@/components/Upload.vue";
import Table from "@/components/Table.vue";

export default {
  name: "Home",
  components: {
    Upload,
    Table
  }
};
</script>
