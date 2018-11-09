<template>
	<div class="content">

		<div>
			<h3>New Recipe Entry</h3>
			<div class="recipe-container">
        <input placeholder="Name of dish" v-model="recipeName">
        <input placeholder="Time to cook in minutes" v-model="timeCook">
			</div>
		</div>

		<div class="img-container">
			<div class="img"></div>
		</div>

		<h3>Ingredients</h3>

		<div class="ingredient-container">
			<div v-for="ingredient in ingredients"> 
        <input placeholder="Name" v-model="ingredient.name">
        <input placeholder="Quantity" v-model="ingredient.quantity">
        <input placeholder="Units" v-model="ingredient.unit">
      </div>
			<input v-on:keyup.enter="onIngredientAdd()"
						 v-model="ingredientToAdd"
						 placeholder="Tap Enter to add...">
		</div>

		<br>
		<button @click="savePublicRecipe()">
			Publish Recipe
		</button>
		<br>
		<button @click="savePrivateRecipe()">
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
			modalActive: false,
			recipeName: '',
      timeCook: ''
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
					unit: ""
				})
				this.ingredientToAdd = ""
			}
		},
		savePrivateRecipe: function () {
			this.saveRecipe({
				name: this.recipeName,
				duration: this.timeCook,
				private: true,
				author: 'TestUser',
				ingredients: this.ingredients,
				owns: true
			})
			this.modalActive = true
		},
    savePublicRecipe: function () {
      this.saveRecipe({
        name: this.recipeName,
        duration: 0,
        private: false,
        author: 'TestUser',
        ingredients: this.ingredients,
        owns: true
      })
      this.modalActive = true
    },
	}
}
</script>