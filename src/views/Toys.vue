<template>
    <div>
      <appbar></appbar>
      <v-main>
        <v-btn @click="displayToyForm">Nuevo Juguete</v-btn>
        <toys-list></toys-list>
        <toy-form></toy-form>
      </v-main>
    </div>
</template>

<script>

import Appbar from '../components/Appbar'
import ToysList from '../components/ToysList'
import ToyForm from '../components/ToyForm'
import {mapActions} from 'vuex'


export default {
  components: {
    Appbar,
    ToysList,
    ToyForm
  },
  methods: {
    ...mapActions(['displayToyForm'])
  },
}
</script>

