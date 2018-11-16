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
          <th>Goal</th>
          <td v-for="summary in daily_summary" :key="summary.goal"> {{summary.goal}}</td>
        </tr>
        <tr>
          <th>Summary</th>
          <td v-for="summary in daily_summary" :key="summary.goal"> {{summary.summary}}</td>
        </tr>
        <tr>
          <th/>
          <td v-for="summary in daily_summary" :key="summary.id" >
            <el-button v-if="!summary.isAchieved" :disabled="true" type="info" round>Get {{summary.value}} HTC </el-button>
            <el-button v-else-if="!summary.isPushed" @click="ACHIEVEMENT_BUTTON_PUSH({id:summary.id, index:summary.index, value: summary.value,daily_summary:daily_summary})" type="success" round>Get {{summary.value}} HTC </el-button>
            <el-button v-else :disabled="true" type="success" round> DONE </el-button>
            <!-- {{ summary.isAchieved}}{{ summary.isPushed}} -->
          </td>
        </tr>
        </tbody>
        <div/>
      </table>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import {
  GET_DAILY_SUMMARY,
  ACHIEVEMENT_BUTTON_PUSH,
  UPDATE_PUSHED_STATE
} from "../vuex/mutation-types";
import firebase from "firebase";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["daily_summary"])
  },
  methods: {
    ...mapActions([ACHIEVEMENT_BUTTON_PUSH, UPDATE_PUSHED_STATE])
  }
};
</script>

<style>
.summary {
  border-spacing: 30px;
}
</style>

