import services from "@/services";

export default {
  namespaced: true,
  state: {
    data: [],
    disabled: false
  },
  mutations: {
    SET_DATA(state, payload) {
      state.data = payload;
      state.disabled = (payload!=null)?payload.length>3:false;
    }
  },
  actions: {
    fetchData({ commit }) {
      return services.getData().then(response => {
        console.log('Get SUCCESS!!');
        commit(
          "SET_DATA",
          response.data
        );
      }).catch(function(){
        console.log('Get FAILURE!!');
      });
    }
  }
};