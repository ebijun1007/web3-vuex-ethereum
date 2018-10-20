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
          <td v-for="achievement in achievements" :key="achievement.goal"> {{achievement.goal}}</td>
        </tr>
        <tr>
          <th>Summary</th>
          <td v-for="achievement in achievements" :key="achievement.goal"> {{achievement.summary}}</td>
        </tr>
        <tr>
          <th/>
          <td v-for="achievement in achievements" v-if="!achievement.isAchieved" :key="achievement.id"> <el-button disabled="true" type="success" round>Get {{achievement.value}} HTC </el-button></td>
          <td v-else-if="!achievement.isPushed"> <el-button @click="ACHIEVEMENT_DONE({id:achievement.id, index:achievement.index, value: achievement.value})" type="success" round>Get {{achievement.value}} HTC </el-button></td>
          <td v-else> <el-button disabled="true" type="success" round> DONE </el-button></td>
          <!-- <td v-if="!achievement.isAchieved" v-for="achievement in achievements" :key="achievement.id"> <el-button :disabled="buttons_pushed[achievement.index]" @click="ACHIEVEMENT_DONE({id:achievement.id, index:achievement.index, value: achievement.value})" type="success" round>Get {{achievement.value}} HTC </el-button></td>
          <td v-else> <el-button :disabled="buttons_pushed[achievement.index]" type="success" round>Done</el-button></td> -->
        </tr>
        </tbody>
      </table>
      {{ achievements }}
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import { GET_DAILY_SUMMARY, ACHIEVEMENT_DONE } from "../vuex/mutation-types";
import firebase from "firebase";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["achievements", "buttons_pushed"])
  },
  methods: {
    ...mapActions([ACHIEVEMENT_DONE])
  }
};
</script>

<style>
.summary {
  border-spacing: 30px;
}
</style>

