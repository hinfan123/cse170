<template>
	<div class="home">
		<div class="columns m-t-md">
			<div v-for="(col, i) in columns" class="column p-none">
				<div v-for="(recipe, j) in getColRecipes(col)"
										 @click="openModal(recipe)"
										 :class="['recipe-box', boxSizeArray[i][j]]">
					<div class="saved-btn" v-on:click.stop="">
						<i class="fas fa-heart"></i>
					</div>
					<h4 class="m-b-sm color-default text-semibold">{{ recipe.name }}</h4>
					<h6 class="m-none color-default">@{{ recipe.author }}</h6>
				</div>
			</div>
		</div>

		<b-modal v-if="clickedRecipe"
						 :active.sync="modalActive"
						 :width="600"
						 :canCancel="['escape', 'outside']">
			<div class="card">
				<div class="card-content">
					<div class="is-flex justify-between">
						<div class="is-flex flex-column">
							<h2 class="color-default m-b-sm">{{ clickedRecipe.name }}</h2>
							<h5 class="color-default">@{{ clickedRecipe.author }}</h5>
						</div>
						<div class="duration text-semibold">
							<i class="fas fa-clock"></i> {{ clickedRecipe.duration }} minutes
						</div>
					</div>
					<div class="img-container">
						<div class="img-carousel-btn">
							<i class="fas fa-chevron-left"></i>
						</div>
						<div class="img">

						</div>
						<div class="img-carousel-btn">
							<i class="fas fa-chevron-right"></i>
						</div>
					</div>
					<p class="color-default text-semibold">
						This is a detailed description<br>
						It could be many lines<br>
					</p>
					<div class="is-flex justify-center">
						<router-link to="/h/cook" tag="button" class="button primary is-large">
							cook
						</router-link>
					</div>
				</div>
			</div>
		</b-modal>
		<div class="close-modal-btn" v-if="modalActive" @click="closeModal()">
			<i class="fas fa-chevron-left"></i>BACK
		</div>


	</div>
</template>

<style lang="scss" scoped>
.close-modal-btn {
	position: fixed;
	top: 50px; left: 50px;
	z-index: 50;
	cursor: pointer;
	padding: 0.5em;
	font-size: 20px;
	color: #FFFFFF;
	font-weight: 700;
	border-radius: 8px;
	i {
		margin-right: 0.75em;
	}
	&:hover {
		background: rgba(200,200,200, 0.5);
	}
}

.duration {
	i {
		font-size: 1.25em;
		margin-right: 0.25em;
	}
	font-size: 18px;
}
</style>

<script>
// @ is an alias to /src
import _ from 'lodash'

export default {
	name: 'home',
	data: function () {
		return {
			recipes: [
				{ name: "Recipe 1",  duration: 25, author: "Jack Ma" },
				{ name: "Recipe 2",  duration: 25, author: "Jeff Bezos" },
				{ name: "Recipe 3",  duration: 25, author: "Steve Jobs" },
				{ name: "Recipe 4",  duration: 25, author: "Bill Gates" },
				{ name: "Recipe 5",  duration: 25, author: "Mark Cuban" },
				{ name: "Recipe 6",  duration: 25, author: "Travis Kalanick" },
				{ name: "Recipe 7",  duration: 25, author: "Steve Wozniak" },
				{ name: "Recipe 8",  duration: 25, author: "Evan Spiegel" },
				{ name: "Recipe 9",  duration: 25, author: "Mark Zuckerberg" },
				{ name: "Recipe 10", duration: 25, author: "Warren Buffet" },
				{ name: "Recipe 11", duration: 25, author: "Elon Musk" },
				{ name: "Recipe 12", duration: 25, author: "Brad Pitt" },
				{ name: "Recipe 13", duration: 25, author: "Arbold Swarznegger" },
				{ name: "Recipe 14", duration: 25, author: "Matt LeBlanc" },
				{ name: "Recipe 15", duration: 25, author: "Tom Cruise" },
				{ name: "Recipe 16", duration: 25, author: "Keanu Reeves" },
				{ name: "Recipe 17", duration: 25, author: "Jackie Chan" },
				{ name: "Recipe 18", duration: 25, author: "Gigi Hadid" },
				{ name: "Recipe 19", duration: 25, author: "Cara Delevingne" },
				{ name: "Recipe 20", duration: 25, author: "Gal Gadot" },
				{ name: "Recipe 21", duration: 25, author: "Tom Hiddleston" },
				{ name: "Recipe 22", duration: 25, author: "Simon Pegg" },
				{ name: "Recipe 23", duration: 25, author: "Charlize Theron" },
			],
			columns: [0,1,2],
			boxSizeArray: undefined,
			boxSizes: ['xs','sm','md','lg', 'xl'],
			modalActive: false,
			clickedRecipe: undefined
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
			return Math.floor(Math.random() * this.boxSizes.length)
		},
		openModal: function (recipe) {
			this.modalActive = true
			this.clickedRecipe = recipe
		},
		closeModal: function (recipe) {
			this.modalActive = false
			this.clickedRecipe = undefined
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
