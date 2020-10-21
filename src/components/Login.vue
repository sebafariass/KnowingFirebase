<template>
  <div>
    <p>Ingresa los siguientes datos</p>
    <span><h3>Usuario</h3></span>
    <input type="text" v-model="User" />
    <br />
    <input type="number" v-model="Pass" /><span><h3>Password</h3></span>
    <br />
    <button type="text" @click="ingreso">Ingresar</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      User: "",
      Pass: "",
    };
  },
  methods: {
    ingreso() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.User, this.Pass)
        .then((user) => this.$router.replace("Home"))
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
        });
    },
  },
};
</script>

<style lang="scss">
input {
  margin: 5px;
}
</style>