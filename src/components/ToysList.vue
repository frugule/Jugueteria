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
    ...mapActions(['setToys'])
  },  
  created(){
   this.setToys()
  }
}
</script>

<style>

</style>