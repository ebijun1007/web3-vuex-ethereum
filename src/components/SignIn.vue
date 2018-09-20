<template>
    <div class="signin">
        <img src=".././assets/ethereum.png">
        <h2>Sign in</h2>
        <input @change="INPUT_ID($event.target.value)" placeholder="Username" type="text" id="id">
        <input @change="INPUT_PASSWORD($event.target.value)" placeholder="Password" type="password" id="password">
        <button @click="ACCOUNT_SIGN_IN">Signin</button>
        <p>You don't have an account? 
            <button @click="JUNP_TO_SIGNUP">Create Account</button>
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
  CHANGE_PROFILES,
  JUNP_TO_SIGNUP
} from "../vuex/mutation-types";

export default {
  methods: {
    ...mapActions([
      ACCOUNT_SIGN_IN,
      ACCOUNT_SIGN_UP,
      INPUT_ID,
      INPUT_PASSWORD,
      JUNP_TO_SIGNUP
    ])
  }
};
</script>

<style>
</style>
