<template>
  <div class="SignUp">
    <img src=".././assets/ethereum.png">
    <h2>Sign up</h2>
    <input @change="INPUT_ID($event.target.value)" placeholder="Username" type="text" id="id">
    <input @change="INPUT_PASSWORD($event.target.value)" placeholder="Password" type="password" id="password">
    <button @click="ACCOUNT_SIGN_UP">Register</button>
    <p>Do you already have an account? 
        <button @click="JUNP_TO_SIGNIN">Signin</button>
    </p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

import {
  ACCOUNT_SIGN_IN,
  ACCOUNT_SIGN_UP,
  INPUT_ID,
  INPUT_PASSWORD,
  JUNP_TO_SIGNIN
} from "../vuex/mutation-types";

export default {
  computed: {
    ...mapGetters(["signin_successed"])
  },
  methods: {
    ...mapActions([
      ACCOUNT_SIGN_IN,
      ACCOUNT_SIGN_UP,
      INPUT_ID,
      INPUT_PASSWORD,
      JUNP_TO_SIGNIN
    ])
  }
};
</script>

<style>
</style>
