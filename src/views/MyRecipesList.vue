<template>
	<div id="my-recipes">
		<div class="content">
			<h3 class="align-left m-y-md text-semibold color-default">Published Recipes</h3>
			<div class="is-flex justify-center align-center">

				<div class="recipe-list bottom-border p-b-md m-b-md">
					<h4 v-if="myPublishedRecipeList.length === 0" class="color-placeholder text-regular">
						Looks like you have no recipes :( Go make some!
					</h4>
					<div v-for="recipe in myPublishedRecipeList" class="recipe-entry">
						<div class="recipe-img" :style="{'background-image': genURL(recipe.imgURL)}">

						</div>
						<div class="recipe-description">
							<h5 class="text-semibold color-default m-b-xs">{{ recipe.name }}</h5>
							<p class="text-regular color-muted m-b-sm">
								@{{ recipe.author }}<br>
								{{ recipe.description }}
							</p>
							<div class="btn-container">
								<router-link :to="'/myrecipes/edit/' + recipe.id" tag="button" class="button muted">
									Edit
								</router-link>
								<router-link :to="'/m/cook/' + recipe.id" tag="button" class="button primary">
									Cook
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

			<h3 class="align-left m-y-md text-semibold color-default">Private Recipes</h3>

			<div class="is-flex justify-center align-center">

				<!-- <div class="img-carousel-btn">
					<i class="fas fa-chevron-left"></i>
				</div> -->

				<div class="recipe-list">
					<h4 v-if="myPrivateRecipeList.length === 0" class="color-placeholder text-regular">Looks like you have no recipes :( Go make some!</h4>
					<div v-for="recipe in myPrivateRecipeList" class="recipe-entry">
						<div class="recipe-img" :style="{'background-image': genURL(recipe.imgURL)}">
							<!-- <div class="saved-btn">
								<i class="fas fa-heart"></i>
							</div> -->
						</div>
						<div class="recipe-description">
							<h5 class="text-semibold color-default m-b-xs">{{ recipe.name }}</h5>
							<p class="text-regular color-muted m-b-sm">
								@{{ recipe.author }}<br>
								{{ recipe.description }}
							</p>
							<div class="btn-container">
								<router-link :to="'/myrecipes/edit/' + recipe.id" tag="button" class="button muted">
									Edit
								</router-link>
								<router-link :to="'/m/cook/' + recipe.id" tag="button" class="button primary">
									Cook
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
  name: 'my-recipes-list',
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
	},
	created: function () {
	}
}
</script>