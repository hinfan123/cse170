<template>
	<div>
		<div id="top-bar">
			<div class="logo-container">
				<i class="fas fa-utensils"></i>
			</div>
			<div id="search-field">
				<div class="icon-container">
					<i class="fas fa-search"></i>
				</div>
				<input placeholder="Look for recipes to cook...">
			</div>
			<div id="nav">
				<router-link to="/">
					Home
				</router-link>
				<router-link to="/saved">
					Saved
				</router-link>
				<router-link to="/myrecipes">
					My Recipes
				</router-link>
				<router-link to="/profile">
					Profile
				</router-link>
				<router-link to="/create">
					New Recipe
				</router-link>
			</div>
		</div>
		<div id="main-content" class="content">
			<router-view/>
		</div>
	</div>
</template>

<style lang="scss">
</style>

<script>
export default {
	name: 'main-content'
}
</script>