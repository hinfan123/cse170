<template>
	<div id="saved" class="content">
		<div class="recipe-list">
			<router-link to="/cook"
									 tag="div"
									 v-for="recipe in recipes"
									 class="recipe-entry">
				<div class="recipe-img">
					<div class="saved-btn">
						<i class="fas fa-heart"></i>
					</div>
				</div>
				<div class="recipe-description">
					<h3>{{ recipe.name }}</h3>
					<p>
						This is a recipe description<br>
						It can be multiple lines<br>
						It will contain basic details of the recipe<br>
					</p>
				</div>
			</router-link>
		</div>
	</div>
</template>

<style lang="scss">
</style>

<script>
export default {
	name: 'saved',
	data: function () {
		return {
			recipes: [
				{ name: "Recipe 1",},
				{ name: "Recipe 2",},
				{ name: "Recipe 3",},
				{ name: "Recipe 4",},
				{ name: "Recipe 5",},
				{ name: "Recipe 6",},
				{ name: "Recipe 7",},
				{ name: "Recipe 8",},
				{ name: "Recipe 9",},
				{ name: "Recipe 10",},
				{ name: "Recipe 11",},
				{ name: "Recipe 12",},
			]
		}
	},
	methods: {
	},
	created: function () {
	}
}
</script>