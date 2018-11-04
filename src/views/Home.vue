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
import { mapGetters } from 'vuex'

export default {
	name: 'home',
	data: function () {
		return {
			columns: [0,1,2],
			boxSizeArray: undefined,
			boxSizes: ['xs','sm','md','lg', 'xl'],
			modalActive: false,
			clickedRecipe: undefined
		}
	},
	computed: {
		...mapGetters(
			{ recipes: 'filteredRecipes' }
		)
	},
	methods: {
		getColRecipes: function (col) {
			return _.filter(this.recipes, (i, n) => {
				//console.log(n % this.columns.length === col)
				return (n % this.columns.length) === col
			})
		},
		setupGrid: function () {
			this.boxSizeArray = []
			_.forEach(this.columns, (col) => {
				var tmp = []
				_.forEach(this.getColRecipes(col), (recipe) => {
					let r = Math.floor(Math.random() * this.boxSizes.length)
					tmp.push(this.boxSizes[r]);
				})
				this.boxSizeArray.push(tmp)
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
		this.setupGrid()
	},
	watch: {
		recipes: function () {
			this.setupGrid()
		}
	}
}
</script>
