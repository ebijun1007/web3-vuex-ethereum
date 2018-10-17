<template>
    <div class="account">
        <template v-if="signin_successed == true">
          <h2>Hello {{ user_id }}!!</h2>
          <br>
          <h3>Your address is {{ user_address }}</h3>
          <br>
          <h2>Your Balance is {{ user_balance }} HealthCoin </h2>
        </template>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

export default { 
  computed: {
    ...mapGetters([
      "signin_successed",
      "user_id",
      "user_address",
      "user_balance"
    ])
  }
};
</script>

<style>
</style>

