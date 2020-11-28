import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

import api from "./components/documents/api";

export default new Vuex.Store({
  state: {
    items: [],
  },

  getters: {
    getAllItems: (state) => {
      return state.items;
    },
  },

  mutations: {
    //mutations es la unica forma de alterar los estados
    //Estas funciones de mutations solo reciben dos parámetros, el state y el payload (la accion o parámetros que va recibir)
    async setItems(state) {
      let items = await api.getAll();
      state.items = items;
    },
    async insertDocument(state, payload) {
      let r = await api.insertDoc(payload);
      state = r;
      let items = await api.getAll();
      this.state.items = items;
    },
    async updateDoc(state, paylodad) {
      let r = await api.updateDoc(paylodad);
      state = r;
      this.state.items = await api.getAll();
    },
    async deleteDoc(state, payload) {
      state = api.deleteDoc(payload.id);
      this.state.items = await api.getAll();
    },
  },
});
