<template>
    <div>
      <appbar></appbar>
      <v-main>
        <v-btn @click="displayToyForm">Nuevo Juguete</v-btn>
        <toys-list></toys-list>
        <toy-form></toy-form>
      </v-main>
      <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    </div>
</template>

<script>

import Appbar from '../components/Appbar'
import ToysList from '../components/ToysList'
import ToyForm from '../components/ToyForm'
import {mapActions, mapState} from 'vuex'


export default {
  components: {
    Appbar,
    ToysList,
    ToyForm
  },
  computed:{
    ...mapState(['overlay'])
  },
  methods: {
    ...mapActions(['displayToyForm'])
  },
}
</script>

