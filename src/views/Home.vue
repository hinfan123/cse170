<template>
  <div class="home">
		<div class="columns m-t-md">
			<div v-for="(col, i) in columns" class="column p-none">
				<router-link v-for="(recipe, j) in getColRecipes(col)"
										 to="cook"
										 tag="div"
										 :class="['recipe-box', boxSizeArray[i][j]]">
					<div class="saved-btn" v-on:click.stop="">
						<i class="fas fa-heart"></i>
					</div>
					<h4 class="m-b-sm color-default">{{ recipe.name }}</h4>
					<h6 class="m-none color-default">@{{ recipe.author }}</h6>
				</router-link>
			</div>
		</div>
<!-- 		<div class="grid-container">
	<div class="grid">

	</div>
</div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import _ from 'lodash'

export default {
	name: 'home',
	data: function () {
		return {
			recipes: [
				{ name: "Recipe 1",  author: "Jack Ma" },
				{ name: "Recipe 2",  author: "Jeff Bezos" },
				{ name: "Recipe 3",  author: "Steve Jobs" },
				{ name: "Recipe 4",  author: "Bill Gates" },
				{ name: "Recipe 5",  author: "Mark Cuban" },
				{ name: "Recipe 6",  author: "Travis Kalanick" },
				{ name: "Recipe 7",  author: "Steve Wozniak" },
				{ name: "Recipe 8",  author: "Evan Spiegel" },
				{ name: "Recipe 9",  author: "Mark Zuckerberg" },
				{ name: "Recipe 10", author: "Warren Buffet" },
				{ name: "Recipe 11", author: "Elon Musk" },
				{ name: "Recipe 12", author: "Brad Pitt" },
				{ name: "Recipe 13", author: "Arbold Swarznegger" },
				{ name: "Recipe 14", author: "Matt LeBlanc" },
				{ name: "Recipe 15", author: "Tom Cruise" },
				{ name: "Recipe 16", author: "Keanu Reeves" },
				{ name: "Recipe 17", author: "Jackie Chan" },
				{ name: "Recipe 18", author: "Gigi Hadid" },
				{ name: "Recipe 19", author: "Cara Delevingne" },
				{ name: "Recipe 20", author: "Gal Gadot" },
				{ name: "Recipe 21", author: "Tom Hiddleston" },
				{ name: "Recipe 22", author: "Simon Pegg" },
				{ name: "Recipe 23", author: "Charlize Theron" },
			],
			columns: [0,1,2],
			boxSizeArray: undefined,
			boxSizes: ['xs','sm','md','lg']
		}
	},
	computed: {
	},
	methods: {
		getColRecipes: function (col) {
			return _.filter(this.recipes, (i, n) => {
				//console.log(n % this.columns.length === col)
				return (n % this.columns.length) === col
			})
		},
		randSize: function () {
			console.log(Math.floor(Math.random() * 3))
			return Math.floor(Math.random() * 3)
		}
	},
	created: function () {
		this.boxSizeArray = []
		_.forEach(this.columns, (col) => {
			var tmp = []
			_.forEach(this.getColRecipes(col), (recipe) => {
				let r = Math.floor(Math.random() * this.boxSizes.length)
				tmp.push(this.boxSizes[r]);
			})
			this.boxSizeArray.push(tmp)
		})
	}
}
</script>
