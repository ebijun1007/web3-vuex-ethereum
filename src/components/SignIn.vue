<template>
    <div class="signin">
        <img src=".././assets/ethereum.png">
        <h2>Sign in</h2>
        <input @change="INPUT_ID($event.target.value)" placeholder="Username" type="text" id="id">
        <input @change="INPUT_PASSWORD($event.target.value)" placeholder="Password" type="password" id="password">
        <button @click="ACCOUNT_SIGN_IN">Signin</button>
        <p>You don't have an account? 
            <router-link to="/signup">create account now!!</router-link>
        </p>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

import {
  ACCOUNT_SIGN_IN,
  INPUT_ID,
  INPUT_PASSWORD,
  CHANGE_PROFILES
} from "../vuex/mutation-types";

export default {
  computed: {
    ...mapGetters(["signin_successed"])
  },
  methods: {
    ...mapActions([ACCOUNT_SIGN_IN, INPUT_ID, INPUT_PASSWORD])
  }
};
</script>

<style>
</style>
