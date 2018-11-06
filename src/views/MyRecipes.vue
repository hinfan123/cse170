<template>
	<div id="my-recipes">
		<div class="content">
			<h2 class="align-left m-l-xxl">Published Recipes</h2>
			<div class="is-flex justify-center align-center">

				<div class="img-carousel-btn">
					<i class="fas fa-chevron-left"></i>
				</div>

				<div class="recipe-list">
					<div v-for="recipe in publishedRecipes" class="recipe-entry">
						<div class="recipe-img">
							<!-- <div class="saved-btn">
								<i class="fas fa-heart"></i>
							</div> -->
						</div>
						<div class="recipe-description">
							<h4>{{ recipe.name }}</h4>
							<p>
								This is a recipe description<br>
								It can be multiple lines<br>
							</p>
							<div class="btn-container">
								<router-link to="/edit" tag="button" class="button yellow">
									edit
								</router-link>
								<router-link to="/m/cook" tag="button" class="button primary">
									cook
								</router-link>
							</div>
						</div>
					</div>
				</div>

				<div class="img-carousel-btn">
					<i class="fas fa-chevron-right"></i>
				</div>

			</div>

			<h2 class="align-left m-l-xxl">Private Recipes</h2>

			<div class="is-flex justify-center align-center">

				<div class="img-carousel-btn">
					<i class="fas fa-chevron-left"></i>
				</div>

				<div class="recipe-list">
					<div v-for="recipe in privateRecipes" class="recipe-entry">
						<div class="recipe-img">
							<!-- <div class="saved-btn">
								<i class="fas fa-heart"></i>
							</div> -->
						</div>
						<div class="recipe-description">
							<h3>{{ recipe.name }}</h3>
							<p>
								This is a recipe description<br>
								It can be multiple lines<br>
							</p>
							<div class="btn-container">
								<router-link to="/edit" tag="button" class="button yellow">
									edit
								</router-link>
								<router-link to="/m/cook" tag="button" class="button primary">
									cook
								</router-link>
							</div>
						</div>
					</div>
				</div>

				<div class="img-carousel-btn">
					<i class="fas fa-chevron-right"></i>
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
			publishedRecipes: [],
			privateRecipes: []
		}
	},
	methods: {
	},
	created: function () {
	}
}
</script>