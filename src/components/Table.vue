<template>
  <div>
    <h1> Table</h1>
    {{data}}
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Table",
  computed: {
    ...mapState(["data"])
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions("data", ["fetchData"])
  }
};
</script>

