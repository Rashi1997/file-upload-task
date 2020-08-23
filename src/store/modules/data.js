import services from "@/services";

export default {
  namespaced: true,
  state: {
    data: [],
    file: {}
  },
  mutations: {
    SET_DATA(state, payload) {
      state.data = payload;
    }
  },
  actions: {
    fetchData({ commit }) {
      return services.getData().then(response => {
        commit(
          "SET_DATA",
          response.data
        );
      });
    },
    publishData() {
        return services.postData()
    }
  }
};