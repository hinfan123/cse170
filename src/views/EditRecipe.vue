<template>
	<div class="content">

		<div class="top-bar-cook">
			<router-link to="/myrecipes" tag="div" class="back-btn">
				<i class="fas fa-chevron-left"></i>
			</router-link>
			<h2>Editing {{ recipeName }}</h2>
		</div>
		<div>
			<input v-model="recipeName" placeholder="What's this dish called?">
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
		<button @click="modalActive = true">save as private recipe</button>
		<button @click="modalActive = true">save and publish recipe</button>

		<b-modal :active.sync="modalActive"
						 :width="275"
						 :canCancel="false">
			<div class="card">
				<div class="card-content">
					<h2 class="color-default m-b-sm">Recipe Saved!</h2>
					<div class="is-flex">
						<router-link to="/myrecipes" tag="button" class="button primary">
							OK
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
export default {
	name: 'edit',
	data: function () {
		return {
			recipeName: "This recipe",
			modalActive: false,
			ingredients: [
				{
					name: "Ingredient 1",
					quantity: 5,
					units: "cups"
				},
				{
					name: "Ingredient 2",
					quantity: 100,
					units: "mL"
				},
				{
					name: "Ingredient 3",
					quantity: 1,
					units: "kg"
				},
				{
					name: "Ingredient 4",
					quantity: 500,
					units: "g"
				},
				{
					name: "Ingredient 5",
					quantity: 2,
					units: "pieces"
				}
			],
			ingredientToAdd: ""
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