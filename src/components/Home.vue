<template>
    <div class="account">
        <template v-if="signin_successed == true">
        <h1>Hello {{ signin_successed }}!!</h1>

        <h3>Your address is {{ address }}</h3>
        <h3>Your Balance is {{ balance }} HealthCoin
        <button v-on:click="reload">Balance Reload</button></h3>
        <p class="subtitle" v-text="text"></p>

        <button v-on:click="get">Get 10 Healthcoin</button>
        <modal v-if="showModal" @close="showModal = false"></modal>

        <div align="center">
            <h1> Send HealthCoin </h1>
            <div text-align=left>
            <input type="password" name="dummypass" style="display: none;" /> 
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

        <template v-if="signin_successed == false">
            <SignIn/>
        </template>
    </div>

</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import SignIn from "./SignIn";
import { ACCOUNT_SIGN_OUT } from "../vuex/mutation-types";

export default {
  computed: {
    ...mapGetters(["signin_successed"])
  },
  methods: {
    ...mapActions([ACCOUNT_SIGN_OUT])
  },
  components: {
    SignIn
  }
};
</script>

<style>
</style>

