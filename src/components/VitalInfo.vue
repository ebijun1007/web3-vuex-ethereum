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
          <td id="goal1">{{ goals.activeMinutes }} </td>
          <td id="goal2">{{ goals.caloriesOut }} </td>
          <td id="goal3">{{ goals.distance }} </td>
          <td id="goal4">{{ goals.floors }} </td>
          <td id="goal5">{{ goals.steps }} </td>
        </tr>
        <tr>
          <td>Summary</td>
          <td id="summary1">{{ summary.fairlyActiveMinutes }} </td>
          <td id="summary2">{{ summary.caloriesOut }} </td>
          <td id="summary3">{{ summary.distances[0].distance }} </td>
          <td id="summary4">{{ summary.floors }} </td>
          <td id="summary5">{{ summary.steps }} </td>
        </tr>
        <tr>
          <td></td>
          <td v-for="button in buttons">
            <el-button v-bind:disabled="button.isActive" @click="changeFlag(button.id), achieveDone(button.id)" type="success" round>{{button.value}} </el-button>
          </td>
        </tr>
        </tbody>
      </table>
      {{ flag1 }}

    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import { GET_DAILY_SUMMARY, ACHIEVEMENT_DONE } from "../vuex/mutation-types";
import firebase from "firebase";

export default {
  data() {
    return {
      flags: [
        { value: "Get 10 HTC", isActive: false },
        { value: "Get 10 HTC", isActive: false },
        { value: "Get 10 HTC", isActive: false },
        { value: "Get 10 HTC", isActive: false },
        { value: "Get 10 HTC", isActive: false }
      ]
    };
  },
  computed: {
    ...mapGetters(["goals", "summary"]),
    buttons: function() {
      var buttons = [
        {
          id: 0,
          value: this.flags[0].value,
          goal: this.goals.activeMinutes,
          summary: this.summary.fairlyActiveMinutes,
          isActive: this.flags[0].isActive
        },
        {
          id: 1,
          value: this.flags[1].value,
          goal: this.goals.caloriesOut,
          summary: this.summary.caloriesOut,
          isActive: this.flags[1].isActive
        },
        {
          id: 2,
          value: this.flags[2].value,
          goal: this.goals.distance,
          summary: this.summary.distances[0].distance,
          isActive: this.flags[2].isActive
        },
        {
          id: 3,
          value: this.flags[3].value,
          goal: this.goals.floors,
          summary: this.summary.floors,
          isActive: this.flags[3].isActive
        },
        {
          id: 4,
          value: this.flags[4].value,
          goal: this.goals.steps,
          summary: this.summary.steps,
          isActive: this.flags[4].isActive
        }
      ];
      return buttons;
    }
  },
  methods: {
    changeFlag: function(index) {
      this.flags[index].isActive = true;
      this.flags[index].value = "achieved";
    },
    achieveDone: function(index) {
      this.$store.dispatch(ACHIEVEMENT_DONE, "achievement" + index);
    }
  }
};
</script>

<style>
.summary {
  border-spacing: 30px;
}
</style>

