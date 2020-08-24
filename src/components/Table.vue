<template>
  <div>
    <b-table :show-empty=true striped hover :items="data.data"></b-table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Table",
  data() {
    return {
      timer: ''
    }
  },
  computed: {
    ...mapState(["data"])
  },
  created() {
    this.fetchData();
    this.timer = setInterval(this.fetchData, 5000)
  },
  methods: {
    ...mapActions("data", ["fetchData"])
  }
};
</script>

