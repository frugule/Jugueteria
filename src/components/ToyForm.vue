<template>
  <div class="text-center">
    <v-dialog
      :value="showForm"
      max-width="800"
      persistent
    >
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Privacy Policy
        </v-card-title>

          <v-text-field label="nombre" type="text" :value="currentToy.data.name" @input="updateName"/>
          <v-text-field label="precio" prefix="$" :value="currentToy.data.price" @input="updatePrice"/>
          <v-text-field label="codigo" type="text" :value="currentToy.data.code" @input="updateCode"/>
          <v-text-field label="stock" suffix="unidades" :value="currentToy.data.stock" @input="updateStock"/>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="submitForm">No me arrepiento de nada</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>

import {mapState, mapActions} from 'vuex'

  export default {
    methods: {
      ...mapActions(['hideToyForm', 'updateName', 'updatePrice', 'updateCode', 'updateStock', 'postToy']),
      submitForm(){
        this.postToy()
        this.hideToyForm()
      },

    },
    computed: {
      ...mapState(['showForm', 'currentToy'])
    },
  }
</script>