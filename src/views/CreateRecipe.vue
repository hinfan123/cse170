<template>
	<div class="content">
		
		<div>
			<h3>New Recipe Entry</h3>
			<div class="recipe-container">
				<input v-for="recipe in recipe"
               v-model="recipe.name">
        <input placeholder="Name of dish">
			</div>
		</div>
		
		<div class="img-container">
			<div class="img"></div>
		</div>
		
		<h3>Ingredients</h3>

		<div class="ingredient-container">
			<input v-for="ingredient in ingredients"
						 v-model="ingredient.name">
			<input v-on:keyup.enter="onIngredientAdd()"
						 v-model="ingredientToAdd"
						 placeholder="Tap Enter to add...">
		</div>

		<br>
		<button @click="saveRecipe(recipe)">
			Publish Recipe
		</button>
		<br>
		<button @click="modalActive = true">
			Save as Private Recipe
		</button>

		<b-modal :active.sync="modalActive"
						 :width="400"
						 :canCancel="false">
			<div class="card">
				<div class="card-content">
					<h2 class="color-default m-b-sm">Recipe Created!</h2>
					<div class="is-flex justify-between">
						<router-link to="/m/cook" tag="button" class="button primary">
							Cook it now!
						</router-link>
						<router-link to="/" tag="button" class="button green">
							Back to home page
						</router-link>
					</div>
				</div>
			</div>
		</b-modal>

	</div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
export default {
	name: 'create',
	data: function () {
		return {
			ingredients: [],
			ingredientToAdd: "",
			modalActive: false
		}
	},
	methods: {
		...mapActions([
				'saveRecipe'
			]),
		onIngredientAdd: function () {
			if (this.ingredientToAdd) {
				this.ingredients.push({
					name: this.ingredientToAdd,
					quantity: 0,
					units: ""
				})
				this.ingredientToAdd = ""
			}
		},
	},
	saveRecipe(recipe) {
		this.$store.dispatch('addRecipe',recipe)
	}
}
</script>