<template>
  <div>
    <b-table id="table" bordered small :show-empty=true :items="data.data" :fields="fields"></b-table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Table",
  data() {
    return {
      timer: '',
      fields: [
        {
          key: "fileName",
          label: "Filename",
          class: "text-left align-middle pl-3"
        },
        {
          key: "size",
          label: "Size (bytes)",
          class: "text-left align-middle pl-3"
        },
        {
          key: "dateModified",
          label: "Processed",
          class: "text-left align-middle pl-3"
        }
      ],
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

