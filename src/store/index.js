import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

function emptyToy() {
  return{
    data: {
        name: '',
        price: 0,
        code: '',
        stock: 0
      },
      id: null,
  }
}

export default new Vuex.Store({
  state: {
    toys: [],
    showForm: false,
    //para el formulario
    currentToy: emptyToy(),
    overlay: false
  },
  mutations: {
    SET_EMPTY_TOY(state) {
      state.currentToy.id = null
      const base = emptyToy()
      Object.keys(base.data).forEach(key => {
        state.currentToy.data[key] = base.data[key]
      })
    },

    //guardian de la bobeda
    SET_TOYS(state, data){ state.toys = data },
    //guardian del boton agregar juguete
    DISPLAY_TOY_FORM(state){ state.showForm = true },
    HIDE_TOY_FORM(state){ state.showForm = false },
    UPDATE_NAME(state, name){ state.currentToy.data.name = name},
    UPDATE_PRICE(state, price){ state.currentToy.data.price = price},
    UPDATE_CODE(state, code){ state.currentToy.data.code = code},
    UPDATE_STOCK(state, stock){ state.currentToy.data.stock = stock},
    SET_CURRENT_TOY(state, toy){ state.currentToy = toy},
    OVERLAY_ON(state){state.overlay = true},
    OVERLAY_OFF(state){state.overlay = false}
  },
  actions: {
    //llamando al guardian
    setToys({ commit }){
      commit('OVERLAY_ON')
      commit('SET_EMPTY_TOY')
      axios.get(`https://us-central1-ottobon-dd9d2.cloudfunctions.net/toys/toys`)
      .then(response => { 
        commit('SET_TOYS', response.data)
      }).finally(() => {
        commit('OVERLAY_OFF')
      })
    },
    displayToyForm({ commit }) {
      commit('DISPLAY_TOY_FORM')
      commit('SET_EMPTY_TOY')
    },
    hideToyForm({ commit }){
      commit('HIDE_TOY_FORM')   
    },
    updateName({ commit }, name){ commit('UPDATE_NAME', name)},
    updatePrice({ commit }, price){ commit('UPDATE_PRICE', price)},
    updateCode({ commit }, code){ commit('UPDATE_CODE', code)},
    updateStock({ commit }, stock){ commit('UPDATE_STOCK', stock)},
    //enviar datos del juguete
    postToy({dispatch, state, commit}){
      axios.post(`https://us-central1-ottobon-dd9d2.cloudfunctions.net/toys/toy`, state.currentToy.data)
      .then(() => {
        //trae los datos de la lista(envia los datos)
        commit('SET_EMPTY_TOY')
        dispatch('setToys')
      })
    },
    deleteToy({dispatch, commit}, id){
      axios.delete(`https://us-central1-ottobon-dd9d2.cloudfunctions.net/toys/toy/${id}`)
        .then(() => {
        //trae los datos de la lista(envia los datos)
        commit('SET_EMPTY_TOY')
        dispatch('setToys')
        })
    },
    setCurrentToy({ commit }, id){
      axios.get(`https://us-central1-ottobon-dd9d2.cloudfunctions.net/toys/toy/${id}`)
      .then((response) =>{
        commit('SET_CURRENT_TOY', response.data)
      })
    },
    updateToy({ state, dispatch }, id){
      axios.put(`https://us-central1-ottobon-dd9d2.cloudfunctions.net/toys/toy/${id}`, state.currentToy.data)
      .then(() => {
        dispatch('setToys')
      })
    },
    closeForm({commit}){
      commit('SET_EMPTY_TOY')
      commit('HIDE_TOY_FORM')
    }
  },
  modules: {
  }
  //poner una accion que al apretar actualice la lista o que cargue siempre ordenado
  //la misma tecnica con el spiner para que salga un mensaje de eliminar o agregar con exito
})
