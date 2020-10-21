<template>
  <div>
    <h1>Estas en Modo Administrador</h1>
    <button @click="deslogear">Cerrar sesión</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {};
  },
  methods: {
    deslogear() {
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.replace("Admin"));
    },
  },
  
  created() {
    console.log(firebase.auth().currentUser);
  },
};
</script>

<style>
</style>
