<template>
    <div class="info">
      <table class="summary">
        <thead>
          <th/>
          <th>ActiveMinutes</th>
          <th>CaloriesOut</th>
          <th>Distance</th>
          <th>Floor</th>
          <th>Steps</th>
        </thead>
        <tbody>
        <tr>
          <td>Goals</td>
          <td>{{ goals.activeMinutes }} </td>
          <td>{{ goals.caloriesOut }} </td>
          <td>{{ goals.distance }} </td>
          <td>{{ goals.floors }} </td>
          <td>{{ goals.steps }} </td>
        </tr>
        <tr>
          <td>Summary</td>
          <td>{{ summary.fairlyActiveMinutes }} </td>
          <td>{{ summary.caloriesOut }} </td>
          <td>{{ summary.distances[0].distance }} </td>
          <td>{{ summary.floors }} </td>
          <td>{{ summary.steps }} </td>
        </tr>
        <tr>
          <td></td>
          <td v-for="button in buttons">
            <el-button v-bind:disabled="button.isPushed" @click="changeFlag(button.id)" type="success" round>{{button.value}} </el-button>
          </td>
          <!-- <td><el-button v-bind:disabled="value2.isPushed" @click="value2.changeValue()" type="success" round>{{value2.value}}</el-button></td>
          <td><el-button v-bind:disabled="value3.isPushed" @click="value3.changeValue()" type="success" round>{{value3.value}}</el-button></td>
          <td><el-button v-bind:disabled="value4.isPushed" @click="value4.changeValue()" type="success" round>{{value4.value}}</el-button></td>
          <td><el-button v-bind:disabled="value5.isPushed" @click="value5.changeValue()" type="success" round>{{value5.value}}</el-button></td> -->
        </tr>
        </tbody>
      </table>

    </div>
</template>

<script>
import { mapGetters } from "vuex";

import {
  GET_DAILY_SUMMARY
} from "../vuex/mutation-types";
import firebase from "firebase";

export default {
  data() {
    return {
    flags: [
      {value:"Get 10 HTC", isPushed:false},
      {value:"Get 10 HTC", isPushed:false},
      {value:"Get 10 HTC", isPushed:false},
      {value:"Get 10 HTC", isPushed:false},
      {value:"Get 10 HTC", isPushed:false}
    ]}
  },
  computed: {
    ...mapGetters([
      "goals",
      "summary"
    ]),
    buttons: function() {
      var buttons = [
        {id:0, value:this.flags[0].value, goal:this.goals.activeMinutes,summary:this.summary.fairlyActiveMinutes,isPushed:this.flags[0].isPushed},
        {id:1, value:this.flags[1].value, goal:this.goals.caloriesOut,summary:this.summary.caloriesOut,isPushed:this.flags[1].isPushed},
        {id:2, value:this.flags[2].value, goal:this.goals.distance,summary:this.summary.distances[0].distance,isPushed:this.flags[2].isPushed},
        {id:3, value:this.flags[3].value, goal:this.goals.floors,summary:this.summary.floors,isPushed:this.flags[3].isPushed},
        {id:4, value:this.flags[4].value, goal:this.goals.steps,summary:this.summary.steps,isPushed:this.flags[4].isPushed}
        ]
      return buttons
    }
  },
  methods: {
    changeFlag: function(id) {
      this.flags[id].isPushed = true
      this.flags[id].value = "achieved"
    }
  }
};
</script>

<style>
.summary{
  border-spacing:30px;
} 
</style>

