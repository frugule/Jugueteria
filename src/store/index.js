import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toys: [],
    showForm: false,
    //para el formulario
    currentToy: {
      data: {
        name: '',
        price: 0,
        code: '',
        stock: 0
      },
      id: null,
    },
    loading: false
  },
  mutations: {
    //guardian de la bobeda
    SET_TOYS(state, data){ state.toys = data },
    //guardian del boton agregar juguete
    DISPLAY_TOY_FORM(state){ state.showForm = true },
    HIDE_TOY_FORM(state){ state.showForm = false },
    UPDATE_NAME(state, name){ state.currentToy.data.name = name},
    UPDATE_PRICE(state, price){ state.currentToy.data.price = price},
    UPDATE_CODE(state, code){ state.currentToy.data.code = code},
    UPDATE_STOCK(state, stock){ state.currentToy.data.stock = stock},
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
    hideToyForm({ commit }){ commit('HIDE_TOY_FORM') },
    updateName({ commit}, name){ commit('UPDATE_NAME', name)},
    updatePrice({ commit }, price){ commit('UPDATE_PRICE', price)},
    updateCode({ commit }, code){ commit('UPDATE_CODE', code)},
    updateStock({ commit }, stock){ commit('UPDATE_STOCK', stock)},
    //enviar datos del juguete
    postToy({dispatch, state}){
      axios.post(`https://us-central1-ottobon-dd9d2.cloudfunctions.net/toys/toy`, state.currentToy.data)
      .then(() => {
        //trae los datos de la lista(envia los datos)
        dispatch('setToys')
      })
    },
    deleteToy({dispatch}, id){
      axios.delete(`https://us-central1-ottobon-dd9d2.cloudfunctions.net/toys/toy/${id}`)
        .then(() => {
        //trae los datos de la lista(envia los datos)
        dispatch('setToys')
        })
    },

  },
  modules: {
  }
})
