<template>
  <div>
    <v-main>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Nombre</th>
              <th class="text-left">ID</th>
              <th class="text-left">Stock</th>
              <th class="text-left">Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="toy in toys" :key="toy.id">
              <td>{{ toy.data.name }}</td>
              <td>{{ toy.data.code }}</td>
              <td>{{ toy.data.stock }}</td>
              <td>{{ toy.data.price }}</td>
              <td><button class="button btn-success" @click="removeToy(toy.id)">Borrar</button></td>
              <td><button class="button btn-success" @click="editToy(toy.id)">Editar</button></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-main>
  </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'

export default {
  computed: {
    ...mapState(['toys'])
  },
  methods: {
    ...mapActions(['setToys', 'deleteToy', 'setCurrentToy', 'displayToyForm']),
    removeToy(id){
      let ok = confirm('¿estas seguro?')
      if(ok){
        this.deleteToy(id)
      }
    },
    editToy(id){
      //primero establecer el juguete actual
      this.setCurrentToy(id)
      //desplegar el formulario ocn el juguete actual
      this.displayToyForm()
    }
  },  
  created(){
   this.setToys()
  }
}
</script>

<style>

</style>