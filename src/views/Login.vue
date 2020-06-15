<template>
  <div>
    <v-app>
    <v-card id="container">
      <v-card-title class="pb-0"> 
        <h1 class="mx-auto">OTTO KLAUS</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="User"
          prepend-icon="mdi-account-circle"
          v-model='user'
          />
          <v-text-field label="Password" :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          v-model='password'
          />
        </v-form>
      </v-card-text>
      <v-divider/>
      <v-card-actions>
        <v-btn color="success">Register</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info" @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
  </div>
</template>

<script>
import Firebase from 'firebase'
export default {
  name: 'App',

  data: () => ({
    user: '',
    password: '',
    showPassword: false
  }),
  methods: {
    login(){
      Firebase.auth().signInWithEmailAndPassword(this.user, this.password)
      .then(() =>{
        this.$router.push('/')
        alert(`Bienvenido ${this.user}`)
      }).catch(() =>{
        alert(`Algo salio mal u.u`)
      })
    }
  }
};
</script>
