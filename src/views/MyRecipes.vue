<template>
	<div id="my-recipes">
		<div class="content">
			<h2 class="align-left m-l-xxl">Published Recipes</h2>
			<div class="is-flex justify-center align-center">

				<!-- <div class="img-carousel-btn">
					<i class="fas fa-chevron-left"></i>
				</div> -->

				<div class="recipe-list">
					<div v-for="recipe in myPublishedRecipeList" class="recipe-entry">
						<div class="recipe-img" :style="{'background-image': genURL(recipe.imgURL)}">
							<!-- <div class="saved-btn">
								<i class="fas fa-heart"></i>
							</div> -->
						</div>
						<div class="recipe-description">
							<h4>{{ recipe.name }}</h4>
							<p>
								{{ recipe.description }}
							</p>
							<div class="btn-container">
								<!--<router-link to="/edit" tag="button" class="button yellow">
									edit
								</router-link>-->
								<router-link :to="'/m/cook/' + recipe.id" tag="button" class="button primary">
									cook
								</router-link>
							</div>
						</div>
					</div>
				</div>

				<!-- <div class="img-carousel-btn">
					<i class="fas fa-chevron-right"></i>
				</div>
				 -->
			</div>

			<h2 class="align-left m-l-xxl">Private Recipes</h2>

			<div class="is-flex justify-center align-center">

				<!-- <div class="img-carousel-btn">
					<i class="fas fa-chevron-left"></i>
				</div> -->

				<div class="recipe-list">
					<div v-for="recipe in myPrivateRecipeList" class="recipe-entry">
						<div class="recipe-img" :style="{'background-image': genURL(recipe.imgURL)}">
							<!-- <div class="saved-btn">
								<i class="fas fa-heart"></i>
							</div> -->
						</div>
						<div class="recipe-description">
							<h4>{{ recipe.name }}</h4>
							<p>
								{{ recipe.description }}
							</p>
							<div class="btn-container">
								<!--<router-link to="/edit" tag="button" class="button yellow">
									edit
								</router-link>-->
								<router-link :to="'/m/cook/' + recipe.id" tag="button" class="button primary">
									cook
								</router-link>
							</div>
						</div>
					</div>
				</div>

				<!-- <div class="img-carousel-btn">
					<i class="fas fa-chevron-right"></i>
				</div> -->
			</div>
		</div>
	</div>
</template>

<style lang="scss">
</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'myRecipes',
	data: function () {
		return {
		}
	},
	computed: {
		...mapGetters([
				'myPublishedRecipeList',
				'myPrivateRecipeList'
		])
	},
	methods: {
		genURL: function (url) {
			let actual = url? url :
					'https://www.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg'
			return 'url(' + actual + ')'
		}
	},
	created: function () {
	}
}
</script>