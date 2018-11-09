<template>
	<div class="content">

		<div>
			<h3>New Recipe Entry</h3>
			<div class="recipe-container is-flex flex-column">
				<input placeholder="Name of dish" v-model="recipeName">
				<input placeholder="Time to cook in minutes" v-model="timeCook">
				<textarea rows="3" v-model="description" placeholder="Describe your recipe..."></textarea>
				<input placeholder="Enter the URL to a picture of your dish" v-model="imgURL">
			</div>
		</div>

		<!-- <div class="img-container">
			<div class="img"></div>
		</div> -->

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

		<div v-for="(step, i) in steps" class="step-section is-flex flex-column">
			<h4>Step {{ step.n }}</h4>
			<input v-model="step.title"
						 placeholder="Step title">
			<textarea rows="3" v-model="step.details" placeholder="Add some details..."></textarea>
			<div class="field">
				<b-checkbox v-model="step.timer">
						Has timer?
				</b-checkbox>
			</div>
			<input v-if="step.timer" v-model="step.duration" placeholder="How long in minutes?">
			<br>
		</div>

		<button @click="addStep()">
			Add a step
		</button>

		<br>
		<div class="is-flex">
			<button @click="savePublicRecipe()">
				Publish Recipe
			</button>
			<button @click="savePrivateRecipe()">
				Save as Private Recipe
			</button>
		</div>

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

<style scoped lang="scss">
input { width: 300px; }
</style>

<script>
import { mapGetters, mapActions} from 'vuex'
export default {
	name: 'create',
	data: function () {
		return {
			ingredients: [],
			ingredientToAdd: '',
			description: '',
			modalActive: false,
			recipeName: '',
			timeCook: '',
			imgURL: undefined,
			steps: [
				{
					n: 1,
					title: '',
					details: '',
					gifURL: '',
					timer: false,
					duration: undefined
				}
			]
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
					quantity: undefined,
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
				owns: true,
				steps: this.steps,
				description: this.description,
				imgURL: this.imgURL
			})
			this.modalActive = true
		},
		savePublicRecipe: function () {
			this.saveRecipe({
				name: this.recipeName,
				duration: this.timeCook,
				private: false,
				author: 'TestUser',
				ingredients: this.ingredients,
				owns: true,
				steps: this.steps,
				description: this.description,
				imgURL: this.imgURL
			})
			this.modalActive = true
		},
		addStep: function () {
			this.steps.push({
					n: this.steps.length + 1,
					title: '',
					details: '',
					gifURL: '',
					timer: false,
					duration: undefined
			})
		}
	}
}
</script>