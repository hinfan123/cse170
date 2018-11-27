<template>
	<div class="content">

		<div class="fixed-btn-container left">
			<button class="button muted m-l-xl" @click="$router.go(-1)">
				<i class="fas fa-chevron-left m-r-sm"></i>BACK
			</button>
		</div>

		<div class="fixed-btn-container right">
			<button v-if="!isEdit" class="button primary m-b-md" @click="savePublicRecipe()">
				<i class="fas fa-share-square m-r-sm"></i>
				Publish Recipe
			</button>
			<button v-if="!isEdit" class="button muted" @click="savePrivateRecipe()">
				<i class="fas fa-eye-slash m-r-sm"></i>
				Save as Private Recipe
			</button>
			<button v-if="isEdit" @click="saveEditedRecipe()" class="button primary m-r-xl">
				<i class="fas fa-check m-r-sm"></i>Save
			</button>
		</div>

		<div class="columns">
			<div class="column">
				<h2 class="color-default text-semibold m-b-none">
					{{ isEdit? 'Editing Recipe: ' + recipe.name :
						 recipe.name? 'Creating a new version of "' + oldRecipeName  + '"':
						 'Create New Recipe'}}
				</h2>
			</div>
		</div>

		<div class="columns m-b-none">

	<!-- Basic Info -->
			<div class="column is-6">
				<div class="img-container sm m-r-lg">
					<div class="img" :style="{'background-image': genURL(recipe.imgURL)}">
					</div>
				</div>
			</div>

			<div class="column is-6">
				<div class="field m-b-sm">
					<label class="label m-none">Recipe Name</label>
					<div class="control">
						<input class="input" :class="{'error': triedSubmitting && !recipe.name}"
									 type="text"
									 placeholder="Give your recipe a name!"
									 v-model="recipe.name">
					</div>
				</div>
				<div class="field m-b-0">
					<label class="label m-none">Description</label>
					<div class="control">
						<textarea rows="5" :class="{'error': triedSubmitting && !recipe.description}"
											v-model="recipe.description"
											placeholder="Describe your recipe...">
						</textarea>
					</div>
				</div>
			</div>
		</div>

		<div class="columns bottom-border m-b-lg">
			<div class="column is-6">
				<div class="field m-none">
					<label class="label m-none">Image URL</label>
					<div class="control">
						<input class="input"
									 type="text"
									 placeholder="Enter the URL to an image of your recipe"
									 v-model="recipe.imgURL">
					</div>
				</div>
			</div>
			<div class="column is-6">
				<div class="field m-b-sm">
					<label class="label m-none">Cooking Duration</label>
					<div class="control">
						<input class="input" :class="{'error': triedSubmitting && (!recipe.duration || isNaN(recipe.duration))}"
									 type="text"
									 placeholder="How long does this recipe take to cook?"
									 v-model="recipe.duration">
					</div>
				</div>
			</div>
		</div>

	<!-- Ingredients -->
		<div class="columns m-b-none">
			<div class="column">
				<h2 class="color-default text-semibold m-b-none">Ingredients</h2>
			</div>
		</div>

		<div class="columns bottom-border m-b-lg">
			<div class="column">
				<div v-for="(ingredient, i) in recipe.ingredients"
						 class="ingredient-row m-b-md">
					<div class="is-flex left-entry">
						<div class="field m-b-none wide">
							<div class="control">
								<input class="input" :class="{'error': triedSubmitting && !ingredient.name}"
											 type="text"
											 placeholder="Ingredient name"
											 v-model="ingredient.name">
							</div>
						</div>
						<div class="field m-b-none narrow">
							<div class="control">
								<input class="input" :class="{'error': triedSubmitting && !ingredient.quantity}"
											 type="text"
											 placeholder="Quantity"
											 v-model="ingredient.quantity">
							</div>
						</div>
						<div class="field m-b-none narrow">
							<div class="control">
								<input class="input"
											 type="text"
											 placeholder="Units"
											 v-model="ingredient.unit">
							</div>
						</div>
					</div>
					<div class="right-entry">
						<div class="delete-btn text-center"
								 @click="recipe.ingredients.splice(i, 1)">
							<i class="fas fa-times"></i>
						</div>
					</div>
				</div>
				<div class="ingredient-row">
					<div class="is-flex left-entry">
						<div class="field m-b-none wide">
							<div class="control">
								<input class="input"
											 type="text"
											 placeholder="Ingredient name"
											 ref="ingredientBox"
											 v-on:keyup.enter="onIngredientAdd()"
											 v-model="ingredientToAdd">
							</div>
						</div>
						<div class="field m-b-none narrow">
							<div class="control">
								<input class="input"
											 type="text"
											 placeholder="Quantity"
											 v-on:keyup.enter="onIngredientAdd()"
											 v-model="quantityToAdd"
											 :disabled="!ingredientToAdd">
							</div>
						</div>
						<div class="field m-b-none narrow">
							<div class="control">
								<input class="input"
											 type="text"
											 placeholder="Units"
											 v-on:keyup.enter="onIngredientAdd()"
											 v-model="unitToAdd"
											 :disabled="!ingredientToAdd">
							</div>
						</div>
					</div>
					<div class="right-entry is-unselectable">
						<h6 class="color-muted m-none no-wrap">Tap enter to add!</h6>
					</div>
				</div>
			</div>
		</div>

	<!-- Steps -->
		<div v-for="(step, i) in recipe.steps" class="step-section columns">
			<div class="column p-none">

				<div class="columns m-none">
					<div class="column">
						<h3 class="color-default text-semibold m-b-none">Step {{ i + 1 }}</h3>
					</div>
				</div>

				<div class="delete-btn" @click="deleteStep(i)">
					<i class="fas fa-times"></i>
				</div>

				<div class="columns m-none">

					<div class="column is-6">
						<div class="img-container sm m-r-lg">
							<div class="img" :style="{'background-image': genURL(step.gifURL)}">
							</div>
						</div>
					</div>

					<div class="column is-6">
						<div class="field m-b-sm">
							<label class="label m-none">Instruction Title</label>
							<div class="control">
								<input class="input" :class="{'error': triedSubmitting && !step.title}"
											 type="text"
											 placeholder="Summarize your step..."
											 v-model="step.title">
							</div>
						</div>
						<div class="field m-b-0">
							<label class="label m-none">Details</label>
							<div class="control">
								<textarea rows="5" :class="{'error': triedSubmitting && !step.details}"
													v-model="step.details"
													placeholder="Add some details...">
								</textarea>
							</div>
						</div>

					</div>
				</div>

				<div class="columns m-none">
					<div class="column is-6">
						<div class="field m-none">
							<label class="label m-none">Image/GIF URL</label>
							<div class="control">
								<input class="input"
											 type="text"
											 placeholder="Enter the URL to an image or GIF"
											 v-model="step.gifURL">
							</div>
						</div>
					</div>
					<div class="column is-6 p-none">
						<div class="columns m-none p-none">
							<div class="column is-3">
								<div class="field m-none">
									<label class="label m-none">Has Timer?</label>
									<div class="control">
										<div class="check-box" @click="onTimerCheckbox(step)">
											<i v-if="step.timer" class="fas fa-check-square tick"></i>
											<i v-if="!step.timer" class="far fa-square no-tick"></i>
										</div>
									</div>
								</div>
							</div>
							<div class="column is-9">
								<div class="field m-none">
									<label class="label m-none" :class="{'color-accent': !step.timer}">
										Timer Duration
									</label>
									<div class="field has-addons m-none">
										<p class="control">
											<input class="input" :class="{'error': triedSubmitting && step.timer && (!step.duration || isNaN(step.duration))}"
														 type="text"
														 placeholder="How long?"
														 v-model="step.duration"
														 :disabled="!step.timer">
										</p>
										<p class="control">
											<a class="button is-static" :class="{'disabled': !step.timer}">
												minutes
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="columns m-b-lg">
			<div class="column">
				<button class="button muted md" @click="addStep()">
					Add a Step
				</button>
			</div>
		</div>

		<b-modal :active.sync="modalActive"
						 :width="300"
						 :canCancel="false">
			<div class="card">
				<div class="card-content">
					<h4 class="color-default text-semibold m-b-sm">
						Recipe Created!
					</h4>
					<h6 class="color-muted">
						It will now show up in the "My Recipes" page!
					</h6>
					<div class="is-flex justify-between full-width">
						<router-link to="/home" tag="button" class="button primary full-width">
							Back to Home Page
						</router-link>
					</div>
				</div>
			</div>
		</b-modal>

		<b-modal :active.sync="badInfoModalActive"
						 :width="325"
						 :canCancel="['escape', 'outside']">
			<div class="card">
				<div class="card-content">
					<h4 class="color-default text-semibold m-b-sm">
						Some Information is Missing or Invalid!
					</h4>
					<h6 class="color-muted">
						Please fill in all required fields and make sure they are of appropriate type
					</h6>
					<div class="is-flex justify-between full-width">
						<button class="button primary full-width" @click="badInfoModalActive = false">
							Dismiss
						</button>
					</div>
				</div>
			</div>
		</b-modal>

	</div>
</template>

<style scoped lang="scss">
.fixed-btn-container {
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 100px;
	z-index: 30;
	&.left { left: 25px; }
	&.right { right: 25px; }
}
.columns {
	width: 100%;
}
.ingredient-row {
	display: flex;
	align-items: center;
	.field {
		margin-right: 1em;
		&.narrow {
			width: 125px;
			min-width: 125px;
		}
		&.wide {
		}
	}
	.left-entry {
		width: 100%;
	}
	.right-entry {
		text-align: left;
		min-width: 125px;
		.delete-btn {
			width: 30px;
		}
	}
}
.img-container {
	width: 100%;
	height: 100%;
	margin: 0;
	.img {
		width: 100%;
		height: 100%;
	}
}
</style>

<script>
import { mapActions } from 'vuex'
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
			oldRecipeName: '',
			triedSubmitting: false,
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
		onTimerCheckbox: function (step) {
			step.timer = !step.timer
			if (!step.timer) {
				step.duration = undefined
			}
		},
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
		savePrivateRecipe: function () {
			this.triedSubmitting = true
			if (this.goodToSubmit()) {
				this.readjustStepNumbers()
				this.$emit('bypassRouteGuard')
				this.stepDurationToSeconds()
				this.recipe.owns = true
				this.recipe.private = true
				this.saveRecipe(this.recipe)
				this.modalActive = true
			} else {
				this.badInfoModalActive = true
			}
		},
		savePublicRecipe: function () {
			this.triedSubmitting = true
			if (this.goodToSubmit()) {
				this.readjustStepNumbers()
				this.$emit('bypassRouteGuard')
				this.stepDurationToSeconds()
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
				goodIngredients = goodIngredients && ingredient.name && ingredient.quantity
			})
			let goodSteps = true
			_.forEach(this.recipe.steps, (step) => {
				goodSteps = goodSteps && step.title && step.details &&
				(!step.timer || (step.duration && !isNaN(step.duration)))
			})
			return this.recipe.name && this.recipe.duration && !isNaN(this.recipe.duration) && this.recipe.description && goodIngredients && goodSteps
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
		saveEditedRecipe: function () {
			this.triedSubmitting = true
			if (this.goodToSubmit()) {
				this.stepDurationToSeconds()
				this.updateRecipe(this.recipe)
				this.$emit('bypassRouteGuard')
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
		if (!this.isEdit && this.recipe.name) {
			this.duplicateRecipe = true
			this.oldRecipeName = this.recipe.name
			this.recipe.name = 'New version of ' + this.recipe.name
		}
	}
}
</script>