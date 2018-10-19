<template>
    <div class="get">
        <h2> Get HealthCoin </h2>
        <div text-align=left>
            <table>
            <tr> <td>Amount:</td><td><input @change="INPUT_GET_AMOUNT($event.target.value)" type="text" size ="10"  placeholder="10"></td></tr><br>
            </table>
            <button @click="HTC_GET">Get HTC</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

import { HTC_GET, INPUT_GET_AMOUNT } from "../vuex/mutation-types";

export default {
  methods: {
    ...mapActions([HTC_GET, INPUT_GET_AMOUNT])
  }
};
</script>

<style>
table {
  margin: auto;
}
</style>