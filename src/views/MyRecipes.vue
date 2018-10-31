<template>
	<div id="my-recipes">
		<div class="content">
			<h2 class="align-left">Published Recipes</h2>
			<div class="recipe-list">
				<div v-for="recipe in publishedRecipes" class="recipe-entry">
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
						</p>
						<div class="btn-container">
							<router-link to="/" tag="button">
								edit
							</router-link>
							<router-link to="/cook" tag="button">
								cook
							</router-link>
						</div>
					</div>
				</div>
			</div>

			<h2 class="align-left">Private Recipes</h2>
			<div class="recipe-list">
				<div v-for="recipe in privateRecipes" class="recipe-entry">
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
						</p>
						<div class="btn-container">
							<router-link to="/" tag="button">
								edit
							</router-link>
							<router-link to="/cook" tag="button">
								cook
							</router-link>
						</div>
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
  name: 'my-recipes',
	data: function () {
		return {
			publishedRecipes: [
				{ name: "Published Recipe 1",},
				{ name: "Published Recipe 2",},
				{ name: "Published Recipe 3",},
				{ name: "Published Recipe 4",}
			],
			privateRecipes: [
				{ name: "Private Recipe 1",},
				{ name: "Private Recipe 2",},
				{ name: "Private Recipe 3",},
				{ name: "Private Recipe 4",}
			]
		}
	},
	methods: {
	},
	created: function () {
	}
}
</script>