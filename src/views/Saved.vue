<template>
	<div id="saved" class="content">
		<div class="recipe-list">
			<div v-for="recipe in recipes" class="recipe-entry">
				<div class="recipe-img">
					<div class="saved-btn">
						<i class="fas fa-heart"></i>
					</div>
				</div>
				<div class="recipe-description">
					<h4 class="text-semibold">{{ recipe.name }}</h4>
					<p class="text-regular">
						This is a recipe description.
					</p>
					<div class="btn-container">
						<router-link to="/cook" tag="button" class="button green">
							cook
						</router-link>
					</div>
				</div>
			</div>
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