<template>
  <div id="app">
    <template v-if="signin_successed == false && account_creating == false">
      <SignIn/>
    </template>
    <template v-if="signin_successed == true && account_creating == false">
      <Tab/>
    </template>
    <template v-if="signin_successed == false && account_creating == true">
      <SignUp/>
    </template>
  </div>
</template>

<script>
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Tab from "./components/Tab";


import { mapGetters } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapGetters(["signin_successed", "account_creating"])
  },
  components: {
    SignIn,
    SignUp,
    Home,
    Tab
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
