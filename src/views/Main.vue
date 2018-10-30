<template>
	<div id="main">
		<div class="top-bar">
	    <div>
	      <h2>Some Cooking Site</h2>
	    </div>
	    <div>
	      <input class="search-bar" placeholder="Seach for Recipes...">
	    </div>
	    <div id="nav">
	      <router-link to="/">Home</router-link> |
	      <router-link to="/saved">Saved</router-link> |
	      <router-link to="/myrecipes">My Recipes</router-link> |
	      <router-link to="/profile">Profile</router-link> |
	      <router-link to="/create">New Recipe</router-link>
	    </div>
	   </div>
		 <router-view/>
	</div>
</template>

<style lang="scss">
</style>

<script>
export default {
  name: 'main'
}
</script>