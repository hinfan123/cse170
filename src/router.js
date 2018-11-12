import Vue from 'vue'
import Router from 'vue-router'

import Main from './views/Main.vue'
import Home from './views/Home.vue'
import Saved from './views/Saved.vue'

import MyRecipes from './views/MyRecipes.vue'
import MyRecipesList from './views/MyRecipesList.vue'
import EditRecipe from './views/EditRecipe.vue'

import CreateRecipe from './views/CreateRecipe.vue'

import Profile from './views/Profile.vue'
import Cook from './views/Cook.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
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
          component: MyRecipes,
          children: [
            {
              path: '',
              component: MyRecipesList
            },
            {
              path: '/myrecipes/edit/:id',
              name: 'edit',
              component: EditRecipe
            }
          ]
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
      path: '/:prev/cook/:id',
      name: 'cook',
      component: Cook
    }
  ]
})
