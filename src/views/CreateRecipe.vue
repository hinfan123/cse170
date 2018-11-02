<template>
	<div class="content">
		<div>
			<input placeholder="What's this dish called?">
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
		<button @click="modalActive = true">
			save as private recipe
		</button>
		<br>
		<button @click="modalActive = true">
			publish recipe
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
		onIngredientAdd: function () {
			if (this.ingredientToAdd) {
				this.ingredients.push({
					name: this.ingredientToAdd,
					quantity: 0,
					units: ""
				})
				this.ingredientToAdd = ""
			}
		}
	}
}
</script>