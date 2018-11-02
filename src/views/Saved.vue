<template>
	<div id="saved" class="content">
		<div class="recipe-list">
			<div v-for="recipe in recipes" class="recipe-entry">
				<div class="recipe-img">
					<div class="saved-btn">
						<i class="fas fa-heart"></i>
					</div>
				</div>
				<div class="recipe-description">
					<h4 class="text-semibold">{{ recipe.name }}</h4>
					<p class="text-regular color-muted">
						@{{recipe.author}}<br>
						This is a recipe description.
					</p>
					<div class="btn-container">
						<router-link to="/s/cook" tag="button" class="button primary">
							cook
						</router-link>
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
	name: 'saved',
	data: function () {
		return {
			recipes: [
				{ name: "Recipe 1", author: "Jack Ma"},
				{ name: "Recipe 2", author: "Jeff Bezos"},
				{ name: "Recipe 3", author: "Steve Jobs"},
				{ name: "Recipe 4", author: "Bill Gates"},
				{ name: "Recipe 5", author: "Mark Cuban"},
				{ name: "Recipe 6", author: "Travis Kalanick"},
				{ name: "Recipe 7", author: "Steve Wozniak"},
				{ name: "Recipe 8", author: "Evan Spiegel"},
				{ name: "Recipe 9", author: "Mark Zuckerberg"},
				{ name: "Recipe 10", author: "Warren Buffet"},
				{ name: "Recipe 11", author: "Elon Musk"},
				{ name: "Recipe 12", author: "Larry Page"},
			]
		}
	},
	methods: {
	},
	created: function () {
	}
}
</script>