import Vue from 'vue'
import Router from 'vue-router'
import SignIn from "@/components/SignIn"
import SignUp from "@/components/SignUp"

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'SignIn',
    component: SignIn
  }, {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  }]
})
