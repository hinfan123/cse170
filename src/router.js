import Vue from 'vue'
import Router from 'vue-router'

import Main from './views/Main.vue'
import Home from './views/Home.vue'
import Saved from './views/Saved.vue'
import MyRecipes from './views/MyRecipes.vue'
import Profile from './views/Profile.vue'
import CreateRecipe from './views/CreateRecipe.vue'
import Cook from './views/Cook.vue'
import Finish from './views/Finish.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: '/saved',
          component: Saved
        },
        {
          path: '/myrecipes',
          component: MyRecipes
        },
        {
          path: '/profile',
          component: Profile
        },
        {
          path: '/create',
          component: CreateRecipe
        }
      ]
    },
    {
      path: '/cook',
      name: 'cook',
      component: Cook
    },
    {
      path: '/finish',
      name: 'finish',
      component: Finish
    }
  ]
})
