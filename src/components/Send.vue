<template>
    <div class="send">
        <h2> Send HealthCoin </h2>
        <div text-align=left>
            <table>
            <tr> <td>To:</td><td><input @change="INPUT_SEND_ADDRESS($event.target.value)" type="text" size ="60" placeholder="destination address"></td></tr><br>
            <tr> <td>Amount:</td><td><input @change="INPUT_SEND_AMOUNT($event.target.value)" type="text" size ="10"  placeholder="10"></td></tr><br>
            </table>
            <button @click="HTC_SEND">Send HTC</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import SignIn from "./SignIn";
import Get from "./Get";
import Send from "./Send";
import {
  ACCOUNT_SIGN_OUT,
  HTC_SEND,
  HTC_GET,
  INPUT_SEND_ADDRESS,
  INPUT_SEND_AMOUNT,
  INPUT_GET_AMOUNT
} from "../vuex/mutation-types";
import firebase from "firebase";

export default { 
  computed: {
    ...mapGetters([
      "signin_successed",
      "user_id",
      "user_address",
      "user_balance"
    ])
  },
  methods: {
    ...mapActions([
      ACCOUNT_SIGN_OUT,
      HTC_SEND,
      INPUT_SEND_ADDRESS,
      INPUT_SEND_AMOUNT,
    ])
  },
  components: {
    Get,
    Send
  }
};
</script>

<style>
table{
    margin:auto;
}
</style>