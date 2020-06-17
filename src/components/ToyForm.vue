<template>
  <div class="text-center">
    <v-main>
      <v-row>

        <v-dialog
          :value="showForm"
          max-width="700"
          persistent>
          <v-card class="pa-5 headline cyan lighten-5">
            <v-card-title class="headline cyan darken-2 mb-7" primary-title>
              <span class="white--text">Agregar o Actualizar Juguete</span>
            </v-card-title>
              <v-text-field label="nombre" type="text" :value="currentToy.data.name" @input="updateName" solo/>
              <v-text-field label="precio" prefix="$" :value="currentToy.data.price" @input="updatePrice" solo/>
              <v-text-field label="codigo" type="text" :value="currentToy.data.code" @input="updateCode" solo/>
              <v-text-field label="stock" suffix="unidades" :value="currentToy.data.stock" @input="updateStock" solo/>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="closeForm">Cerrar</v-btn>
              <v-btn color="primary" text @click="submitForm">{{!!currentToy.id ? 'Actualizar':'Crear'}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-main>
  </div>
</template>


<script>

import {mapState, mapActions} from 'vuex'

  export default {
    methods: {
      ...mapActions(['hideToyForm', 'updateName', 'updatePrice', 'updateCode', 'updateStock', 'postToy', 'updateToy', 'closeForm']),
      submitForm(){
        if(this.currentToy.id){
          //si tiene id se llana a ka funcion que actualiza los datos
          this.updateToy(this.currentToy.id)
        }else{
          this.postToy()
        }
        this.hideToyForm()
      },

    },
    computed: {
      ...mapState(['showForm', 'currentToy'])
    },
  }
</script>