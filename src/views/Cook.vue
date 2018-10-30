<template>
	<div id="cook">
		<div class="top-bar-cook">
			<router-link to="/" tag="div" class="back-btn">
				<i class="fas fa-chevron-left"></i>
			</router-link>
			<h2>Preparing to Cook "Some Recipe"</h2>
		</div>
		<div class="content">
			<div class="img-container">
				<div class="img">

				</div>
			</div>
			<div class="ingredient-container">
				<div v-for="ingredient in ingredientsList" class="ingredient-entry">
					<h4>{{ ingredient.name }}</h4>
					<div class="ingredient-amount">
						<h4>{{ ingredient.amount }}</h4>
						<h4>{{ ingredient.units }}</h4>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
</style>

<script>
export default {
	name: 'cook',
	data: function () {
		return {
			ingredientsList: [
				{ name: "Ingredient 1", amount: 1, units: "L" },
				{ name: "Ingredient 2", amount: 2, units: "mL" },
				{ name: "Ingredient 3", amount: 3, units: "kg" },
				{ name: "Ingredient 4", amount: 4, units: "g" },
				{ name: "Ingredient 5", amount: 5, units: "mL" },
				{ name: "Ingredient 6", amount: 6, units: "g" },
			]
		}
	}
}
</script>