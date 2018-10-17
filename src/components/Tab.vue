<template>
    <div class="tab">
        <div>
        <el-tabs style="height: 200px; text-align: center; ">
            <el-tab-pane label="Home"><Home/></el-tab-pane>
            <el-tab-pane label="Send"><Send/></el-tab-pane>
            <el-tab-pane label="Info"><VitalInfo/></el-tab-pane>
            <el-tab-pane label="Get"><Get/></el-tab-pane>
        </el-tabs>
        </div>
        <div style="margin-top:200px;">
            <button @click="ACCOUNT_SIGN_OUT ">Sign out</button>
        </div>
  </div>
</template>

<script>
import Vue from "vue"
import ElementUI from 'element-ui'
import Get from "./Get";
import Send from "./Send";
import Home from "./Home";
import VitalInfo from "./VitalInfo";

import { mapActions } from "vuex";
import {
  ACCOUNT_SIGN_OUT
} from "../vuex/mutation-types";

import 'element-ui/lib/theme-chalk/index.css'
var Main = {
    data() {
      return {
        tabPosition: 'top'
      };
    }
  };

export default { 
  components: {
    Send,
    Get,
    Home,
    VitalInfo
  },
  methods: {
    ...mapActions([
      ACCOUNT_SIGN_OUT
    ])
  }
};
</script>

<style>
.el-tabs__nav-scroll{
    padding: 0;
    position: relative;
    margin: auto;
    margin-bottom: 0px;
    margin-top: 20px;
    max-width: 300px;
}

.el-tabs__item{
    text-align:center;
}
</style>
