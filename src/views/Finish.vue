<template>
	<div id="finish">
		<h1>YAY! Enjoy your dish!</h1>
		<router-link to="/h/cook" tag="button">
			start over
		</router-link>
		<router-link to="/" tag="button">
			back to home
		</router-link>
	</div>
</template>

<style lang="scss">
</style>

<script>
export default {
	name: 'finish',
	data: function () {
		return {
			currPage: 0,
			ingredientsList: [
				{ name: "Ingredient 1", amount: 1, units: "L" },
				{ name: "Ingredient 2", amount: 2, units: "mL" },
				{ name: "Ingredient 3", amount: 3, units: "kg" },
				{ name: "Ingredient 4", amount: 4, units: "g" },
				{ name: "Ingredient 5", amount: 5, units: "mL" },
				{ name: "Ingredient 6", amount: 6, units: "g" },
			],
			pages: [1,2,3,4]
		}
	},
	methods: {
		isCurrPage: function (page) {
			return this.currPage === page
		},
		changePage: function (n) {
			this.currPage = n
		},
		prevPage: function () {
			this.currPage -= 1
		},
		nextPage: function () {
			this.currPage += 1
		}
	},
	created: function () {
	}
}
</script>