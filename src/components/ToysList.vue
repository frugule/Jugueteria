<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Nombre</th>
            <th class="text-left">ID</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="toy in toys" :key="toy.id">
            <td>{{ toy.data.name }}</td>
            <td>{{ toy.data.code }}</td>
            <td>{{ toy.data.stock }}</td>
            <td>{{ toy.data.price }}</td>
            <td><button class="button btn-success" @click="removeToy(toy.id)">Borrar</button></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'

export default {
  computed: {
    ...mapState(['toys'])
  },
  methods: {
    ...mapActions(['setToys', 'deleteToy']),
    removeToy(id){
      let ok = confirm('¿estas seguro?')
      if(ok){
        this.deleteToy(id)
      }
    }
  },  
  created(){
   this.setToys()
  }
}
</script>

<style>

</style>