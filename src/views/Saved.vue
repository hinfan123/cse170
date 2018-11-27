<template>
	<div id="saved" class="content">
		<h2 class="align-left m-y-sm color-default text-semibold">
			<i class="fas fa-heart m-r-sm"></i>Saved Recipes
		</h2>
		<h4 class="align-left m-y-md color-default text-semibold">Other People's Recipes</h4>
		<h4 v-if="otherPeoplesRecipes.length === 0" class="color-placeholder text-regular">
			No saved recipes :(
		</h4>
		<div class="recipe-list m-b-md bottom-border p-b-md">
			<div v-for="recipe in otherPeoplesRecipes" class="recipe-entry">
				<div class="recipe-img" :style="{'background-image': genURL(recipe.imgURL)}"></div>
				<div class="recipe-description">
					<h5 class="text-semibold color-default m-b-xs">{{ recipe.name }}</h5>
					<p class="text-regular color-muted m-b-sm">
						@{{ recipe.author }}<br>
						{{ recipe.description }}
					</p>
					<div class="btn-container">
						<button class="button pink sm" @click="toggleSaved(recipe.id)">
							Unsave
						</button>
						<router-link :to="'/s/cook/' + recipe.id" tag="button" class="button sm primary">
							Cook
						</router-link>
						<button class="button muted m-t-sm" @click="openModal(recipe)">
							Create your own version
						</button>
					</div>
				</div>
			</div>
		</div>

		<h4 class="align-left m-y-md color-default text-semibold">Your Own Recipes</h4>
		<h4 v-if="myRecipes.length === 0" class="color-placeholder text-regular">No recipes to show :(</h4>
		<div class="recipe-list m-b-lg">
			<div v-for="recipe in myRecipes" class="recipe-entry">
				<div class="recipe-img" :style="{'background-image': genURL(recipe.imgURL)}"></div>
				<div class="recipe-description">
					<h5 class="text-semibold color-default m-b-xs">{{ recipe.name }}</h5>
					<p class="text-regular color-muted m-b-sm">
						@{{ recipe.author }}<br>
						{{ recipe.description }}
					</p>
					<div class="btn-container">
						<button class="button pink sm" @click="toggleSaved(recipe.id)">
							Unsave
						</button>
						<router-link :to="'/s/cook/' + recipe.id" tag="button" class="button sm primary">
							Cook
						</router-link>
						<router-link :to="'/myrecipes/edit/' + recipe.id" tag="button" class="button muted m-t-sm md">
							Edit
						</router-link>
					</div>
				</div>
			</div>
		</div>

		<b-modal v-if="clickedRecipe"
						 :active.sync="modalActive"
						 :width="350"
						 :canCancel="['escape', 'outside']">
			<div class="card">
				<div class="card-content">
					<h4 class="color-default m-b-sm text-semibold">
						Create your own version?
					</h4>
					<h6 class="color-muted">
						Since this is another user's recipe, making your own version will duplicate this recipe, and you will permission to edit the duplicated copy
					</h6>
					<div class="is-flex justify-between">
						<button class="button muted sm" @click="modalActive = false">
							Cancel
						</button>
						<router-link :to="'/create/' + clickedRecipe.id" tag="button" class="button sm primary">
							Duplicate and Edit
						</router-link>
					</div>
				</div>
			</div>
		</b-modal>
	</div>
</template>

<style lang="scss">
</style>

<script>
import _ from 'lodash'
import { mapGetters,mapActions } from 'vuex'

export default {
	name: 'saved',
	data: function () {
		return {
			modalActive: false,
			clickedRecipe: undefined
		}
	},
	methods: {
		...mapActions([
			'toggleSaved'
		]),
		openModal: function (recipe) {
			this.clickedRecipe = recipe
			this.modalActive = true
		}
	},
	computed: {
		...mapGetters(
			{ recipes: 'savedRecipes' }
		),
		myRecipes: function () {
			return _.filter(this.recipes, (recipe) => {
				return recipe.owns
			})
		},
		otherPeoplesRecipes: function () {
			return _.filter(this.recipes, (recipe) => {
				return !recipe.owns
			})
		}
	},
	created: function () {
	}
}
</script>