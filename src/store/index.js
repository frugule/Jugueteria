import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toys: [],
    showForm: false
  },
  mutations: {
    //guardian de la bobeda
    SET_TOYS(state, data){ state.toys = data },
    //guardian del boton agregar juguete
    DISPLAY_TOY_FORM(state){ state.showForm = true },
    HIDE_TOY_FORM(state){ state.showForm = false }

  },
  actions: {
    //llamando al guardian
    setToys({ commit }){
      axios.get(`https://us-central1-ottobon-dd9d2.cloudfunctions.net/toys/toys`)
      .then(response => {
        commit('SET_TOYS', response.data)
      })
    },
    displayToyForm({ commit }){ commit('DISPLAY_TOY_FORM') },
    hideToyForm({ commit }){ commit('HIDE_TOY_FORM') }

  },
  modules: {
  }
})
