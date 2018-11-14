<template>
	<div class="content">

		<div v-if="isEdit" class="edit-bar">
			<router-link v-if="isEdit" tag="button" to="/myrecipes" class="m-l-xxl">
				<i class="fas fa-chevron-left"></i>BACK
			</router-link>
			<h3 class="m-none">Editing Recipe: {{recipe.name}}</h3>
			<button @click="saveRecipe()" class="m-r-xxl">
				<i class="fas fa-check"></i>Save
			</button>
		</div>

		<h3 v-if="!isEdit" class="m-none">Create New Recipe</h3>

		<div class="content m-t-xl">
			<div class="is-flex align-center">
				<div class="img-container sm m-r-lg">
					<div class="img" :style="{'background-image': genURL(recipe.imgURL)}">
					</div>
				</div>

				<div>
					<div class="recipe-container is-flex flex-column">
						<input placeholder="Name of dish" v-model="recipe.name">
						<input placeholder="Time to cook in minutes" v-model="recipe.duration">
						<textarea rows="3"
											v-model="recipe.description"
											placeholder="Describe your recipe...">
						</textarea>
						<input placeholder="Enter the URL to a picture of your dish" v-model="recipe.imgURL">
						<div v-if="isEdit" class="field">
							<b-checkbox v-model="recipe.private">
									Private Recipe?
							</b-checkbox>
						</div>
					</div>
				</div>
			</div>

			<h3>Ingredients</h3>

			<div class="ingredient-container">
				<div v-for="(ingredient, i) in recipe.ingredients"
						 class="ingredient-entry">
					<input placeholder="Name" v-model="ingredient.name">
					<input placeholder="Quantity" v-model="ingredient.quantity">
					<input placeholder="Units" v-model="ingredient.unit">
					<div class="delete-btn"
							 @click="recipe.ingredients.splice(i, 1)">
						<i class="fas fa-times"></i>
					</div>
				</div>
				<div class="is-flex align-center">
					<input class="m-r-md"
								 v-on:keyup.enter="onIngredientAdd()"
								 v-model="ingredientToAdd"
								 placeholder="Ingredient name?"
								 ref="ingredientBox">
					<input class="m-r-md"
								 v-on:keyup.enter="onIngredientAdd()"
								 v-model="quantityToAdd"
								 placeholder="How much/many?"
								 :disabled="!ingredientToAdd">
					<input class="m-r-md"
								 v-on:keyup.enter="onIngredientAdd()"
								 v-model="unitToAdd"
								 placeholder="How to measure this?"
								 :disabled="!ingredientToAdd">
					<h6 class="color-muted m-none">Tap enter to add!</h6>
				</div>
			</div>

			<br>

			<div v-for="(step, i) in recipe.steps" class="step-section is-flex flex-column">
				<h4>Step {{ i + 1 }}</h4>
				<div class="delete-btn"
						 @click="deleteStep(i)">
					<i class="fas fa-times"></i>
				</div>
				<div class="is-flex align-center">
					<div class="img-container sm m-r-lg">
						<div class="img" :style="{'background-image': genURL(step.gifURL)}">
						</div>
					</div>

					<div class="is-flex flex-column">
						<input v-model="step.title"
									 placeholder="Step title">
						<textarea rows="3"
											v-model="step.details"
											placeholder="Add some details...">
						</textarea>
						<input placeholder="Enter the URL to a gif or image representing the step..."
									 v-model="step.gifURL">
						<div class="field">
							<b-checkbox v-model="step.timer">
									Has timer?
							</b-checkbox>
						</div>
						<input v-if="step.timer" v-model="step.duration" placeholder="How long in minutes?">
					</div>
				</div>
				<br>
			</div>

			<button @click="addStep()">
				Add a step
			</button>

			<br>
			<div v-if="!isEdit" class="is-flex">
				<button @click="savePublicRecipe()">
					Publish Recipe
				</button>
				<button @click="savePrivateRecipe()">
					Save as Private Recipe
				</button>
			</div>
		</div>

		<b-modal :active.sync="modalActive"
						 :width="400"
						 :canCancel="false">
			<div class="card">
				<div class="card-content">
					<h2 class="color-default m-b-sm">Recipe Created!</h2>
					<div class="is-flex justify-between">
						<!-- <router-link to="/m/cook" tag="button" class="button primary">
							Cook it now!
						</router-link> -->
						<router-link to="/home" tag="button" class="button green">
							Back to home page
						</router-link>
					</div>
				</div>
			</div>
		</b-modal>

		<b-modal :active.sync="badInfoModalActive"
						 :width="300"
						 :canCancel="['escape', 'outside']">
			<div class="card">
				<div class="card-content">
					<h3 class="color-default m-b-sm">Some Information is Missing!</h3>
					<div class="is-flex justify-between">
						<button class="button primary" @click="badInfoModalActive = false">OK</button>
					</div>
				</div>
			</div>
		</b-modal>

	</div>
</template>

<style scoped lang="scss">
input, textarea { width: 300px; margin-bottom: 10px; }
.step-section {
	position: relative;
	.delete-btn {
		right: 5px; top: 5px;
	}
}
.ingredient-entry {
	padding-right: 2em;
	position: relative;
	.delete-btn {
		right: 0;
	}
}
.delete-btn {
	position: absolute;
	font-size: 1.25em;
	cursor: pointer;
}
.ingredient-container {
	input { width: 175px; }
}
</style>

<script>
import { mapGetters, mapActions} from 'vuex'
import _ from 'lodash'

export default {
	name: 'recipe-section',
	data: function () {
		return {
			ingredientToAdd: '',
			quantityToAdd: '',
			unitToAdd: '',
			modalActive: false,
			badInfoModalActive: false,
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
	props: {
		isEdit: Boolean,
		recipe: Object
	},
	methods: {
		...mapActions([
			'saveRecipe',
			'updateRecipe'
		]),
		onIngredientAdd: function () {
			if (this.ingredientToAdd) {
				this.recipe.ingredients.push({
					name: this.ingredientToAdd,
					quantity: this.quantityToAdd,
					unit: this.unitToAdd
				})
				this.ingredientToAdd = ''
				this.quantityToAdd = ''
				this.unitToAdd = ''
				this.$refs.ingredientBox.focus()
			}
		},
		saveEditedRecipe: function () {

		},
		savePrivateRecipe: function () {
			this.stepDurationToSeconds()
			if (this.goodToSubmit()) {
				this.recipe.owns = true
				this.recipe.private = true
				this.saveRecipe(this.recipe)
				this.modalActive = true
			} else {
				this.badInfoModalActive = true
			}
		},
		savePublicRecipe: function () {
			this.stepDurationToSeconds()
			if (this.goodToSubmit()) {
				this.recipe.owns = true
				this.recipe.private = false
				this.saveRecipe(this.recipe)
				this.modalActive = true
			} else {
				this.badInfoModalActive = true
			}
		},
		addStep: function () {
			this.recipe.steps.push({
				n: undefined,
				title: '',
				details: '',
				gifURL: '',
				timer: false,
				duration: undefined
			})
		},
		goodToSubmit: function () {
			let goodIngredients = true
			_.forEach(this.recipe.ingredients, (ingredient) => {
				goodIngredients = goodIngredients && ingredient.name && ingredient.quantity && ingredient.unit
			})
			let goodSteps = true
			_.forEach(this.recipe.steps, (step) => {
				goodSteps = goodSteps && step.title && step.details &&
				(!step.timer || step.duration)
			})
			return this.recipe.name && this.recipe.duration && this.recipe.description && goodIngredients && goodSteps
		},
		stepDurationToSeconds: function () {
			_.forEach(this.recipe.steps, (step) => {
				if (step.duration) {
					step.duration = _.toNumber(step.duration) * 60.0
				}
			})
		},
		stepDurationToMinutes: function () {
			_.forEach(this.recipe.steps, (step) => {
				if (step.duration) {
					step.duration = _.toNumber(step.duration) / 60.0
				}
			})
		},
		saveRecipe: function () {
			this.stepDurationToSeconds()
			if (this.goodToSubmit()) {
				this.updateRecipe(this.recipe)
				this.$router.push('/myrecipes')
			} else {
				this.badInfoModalActive = true
			}
		},
		deleteStep: function (i) {
			this.recipe.steps.splice(i, 1)
			this.readjustStepNumbers()
		},
		readjustStepNumbers: function () {
			_.forEach(this.recipe.steps, (step, i) => {
				step.n = i + 1
			})
		}
	},
	created: function () {
		this.stepDurationToMinutes()
	}
}
</script>