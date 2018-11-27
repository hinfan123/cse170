<template>
	<div class="home">
		<div class="columns m-t-xs">
			<div v-for="(col, i) in columns" class="column p-none">
				<div v-for="(recipe, j) in getColRecipes(col)"
						 @click="openModal(recipe)"
						 :class="['recipe-box', boxSizeArray[i][j]]"
						 :style="{'background-image': genURL(recipe.imgURL)}">
					<div class="save-btn-container"
							 @click.stop="toggleSaved(recipe.id)">
						<button v-show="!isSaved(recipe.id)" class="button xs pink save">
							Save
						</button>
						<button v-show="isSaved(recipe.id)" class="button saved">
							<i class="fas fa-heart"></i>
						</button>
						<button v-show="isSaved(recipe.id)" class="button xs muted unsave">
							Unsave
						</button>
					</div>
					<div class="recipe-text is-flex flex-column">
						<h4 class="m-b-sm color-default text-semibold">{{ recipe.name }}</h4>
						<h6 class="m-none color-default">@{{ recipe.author }}</h6>
					</div>
				</div>
			</div>
		</div>

		<b-modal v-if="clickedRecipe"
						 :active.sync="modalActive"
						 :width="700"
						 :canCancel="['escape', 'outside']"
						 scroll="clip">
			<div class="card">
				<div class="card-content">
					<div class="is-flex justify-between">
						<div class="is-flex flex-column">
							<h2 class="color-default text-semibold m-b-sm">{{ clickedRecipe.name }}</h2>
							<h5 class="color-default">@{{ clickedRecipe.author }}</h5>
						</div>
						<div class="is-flex flex-column align-end">
							<div class="save-btn-container-modal"
									 @click.stop="toggleSaved(clickedRecipe.id)">
								<button v-show="!isSaved(clickedRecipe.id)" class="button muted save sm">
									<i class="fas fa-heart m-r-sm"></i>Save
								</button>
								<button v-show="isSaved(clickedRecipe.id)" class="button saved sm">
									<i class="fas fa-heart m-r-sm"></i>Saved
								</button>
								<button v-show="isSaved(clickedRecipe.id)" class="button muted unsave sm">
									Unsave
								</button>
							</div>
							<div class="duration text-semibold m-t-sm color-default">
								<i class="fas fa-clock"></i> {{ clickedRecipe.duration }} m
							</div>
						</div>
					</div>

					<div class="img-container full-width">
						<div class="img"
								 :style="{'background-image': genURL(clickedRecipe.imgURL)}">
						</div>
					</div>

					<div class="is-flex justify-between bottom-border m-b-md p-y-md">
						<h4 class="color-default text-semibold m-b-none">
							{{ clickedRecipe.description }}
						</h4>
						<router-link :to="'/h/cook/' + clickedRecipe.id"
												 tag="button"
												 class="button primary is-large text-bold md ">
							COOK
						</router-link>
					</div>

					<h5 class="color-default text-semibold m-b-sm">Comments</h5>
					<comments-section :comments="clickedRecipe.recipeComments"
														commentBoxPlaceholder="What do you think of this recipe?">
					</comments-section>

				</div>
			</div>
		</b-modal>
		<button class="button close-modal-btn" v-if="modalActive" @click="closeModal()">
			<i class="fas fa-chevron-left m-r-md"></i>BACK
		</button>


	</div>
</template>

<style lang="scss" scoped>
.duration {
	i {
		font-size: 1.25em;
		margin-right: 0.25em;
	}
	font-size: 18px;
}
</style>

</style>

<script>
// @ is an alias to /src
import _ from 'lodash'
import { mapGetters, mapActions } from 'vuex'

import CommentsSection from '@/components/CommentsSection.vue'

export default {
	name: 'home',
	components: {
		CommentsSection
	},
	data: function () {
		return {
			columns: [0,1,2,3],
			boxSizeArray: undefined,
			boxSizes: ['xs','sm','md','lg','xl'],
			modalActive: false,
			clickedRecipe: undefined
		}
	},
	computed: {
		...mapGetters([
			'filteredRecipes',
			'savedList',
			'dummyRecipes'
		])
	},
	methods: {
		...mapActions([
			'toggleSaved'
		]),
		getColRecipes: function (col) {
			return _.filter(this.dummyRecipes, (i, n) => {
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
		},
		isSaved: function (id) {
			return _.indexOf(this.savedList, id) !== -1
		}
	},
	created: function () {
		this.setupGrid()
	},
	watch: {
		dummyRecipes: function () {
			this.setupGrid()
		}
	}
}
</script>
