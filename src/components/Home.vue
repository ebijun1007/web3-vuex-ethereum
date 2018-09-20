<template>
    <div class="account">
        <template v-if="signin_successed == true">
        <h1>Hello {{ user_id }}!!</h1>
        <h3 >Your address is {{ user_address }}</h3>
        <h3>Your Balance is {{ user_balance }} HealthCoin </h3>

        <div align="center">
            <h1> Send HealthCoin </h1>
            <div text-align=left>
            <table>
            <tr> <td>To:</td><td><input type="text" size ="60" placeholder="destination address" v-model="dest_address"></td></tr><br>
            <tr> <td>Amount:</td><td><input type="text" size ="10"  placeholder="10" v-model="amount"></td></tr><br>
            <tr> <td>Your Password:</td><td><input type="password" size ="10"  placeholder="password" v-model="password"></td></tr>
            </table>
            </div>
        </div>
        <br><br>
        <button @click="ACCOUNT_SIGN_OUT ">Sign out</button>
        </template>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import SignIn from "./SignIn";
import { ACCOUNT_SIGN_OUT } from "../vuex/mutation-types";
import firebase from "firebase";

export default {
  data() {
    return {
      dest_address: "",
      amount: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters([
      "signin_successed",
      "user_id",
      "user_address",
      "user_balance"
    ])
  },
  methods: {
    ...mapActions([ACCOUNT_SIGN_OUT])
  }
};
</script>

<style>
</style>

