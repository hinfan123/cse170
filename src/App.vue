<template>
  <div id="app">
    <div class="top-bar">
      <div>
        <h2>Some Cooking Site</h2>
      </div>
      <div>
        <input class="search-bar" placeholder="Seach for Recipes...">
      </div>
      <div class="menu">
        <a href="./index.html">home</a>
        <a href="#">saved</a>
        <a href="#">my recipes</a>
        <a href="#">profile</a>
        <a href="./new-recipe.html">new recipe</a>
      </div>
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./styles/styles.scss";
</style>
