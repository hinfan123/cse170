<template>
	<div class="home">
		<div class="columns m-t-md">
			<div v-for="(col, i) in columns" class="column p-none">
				<div v-for="(recipe, j) in getColRecipes(col)"
						 @click="openModal(recipe)"
						 :class="['recipe-box', boxSizeArray[i][j]]">
					<div :class="['save-btn', {'saved': isSaved(recipe.id)}]"
							 @click.stop="onSaveBtnClick(recipe)">
						<i class="fas fa-heart"></i>
					</div>
					<h4 class="m-b-sm color-default text-semibold">{{ recipe.name }}</h4>
					<h6 class="m-none color-default">@{{ recipe.author }}</h6>
				</div>
			</div>
		</div>

		<b-modal v-if="clickedRecipe"
						 :active.sync="modalActive"
						 :width="625"
						 :canCancel="['escape', 'outside']"
						 scroll="clip">
			<div class="card">
				<div class="card-content">
					<div class="is-flex justify-between">
						<div class="is-flex flex-column">
							<h2 class="color-default m-b-sm">{{ clickedRecipe.name }}</h2>
							<h5 class="color-default">@{{ clickedRecipe.author }}</h5>
						</div>
						<div class="is-flex flex-column align-end">
							<!-- <div class="duration text-semibold m-b-sm">
								<i class="fas fa-heart"></i> 67
							</div> -->
							<button class="button pink" @click="onSaveBtnClick(clickedRecipe)">
								<i class="fas fa-heart m-r-sm"></i> {{isSaved(clickedRecipe.id)? 'Saved' : 'Save'}}
							</button>
							<div class="duration text-semibold">
								<i class="fas fa-clock"></i> {{ clickedRecipe.duration }} m
							</div>
						</div>
					</div>

					<div class="img-container">
						<div class="img"
								 :style="{'background-image': genURL(clickedRecipe.imgURL)}">
							<div class="img-carousel-btn">
								<i class="fas fa-chevron-left"></i>
							</div>
							<div class="img-carousel-btn">
								<i class="fas fa-chevron-right"></i>
							</div>
						</div>
					</div>

					<p class="color-default text-semibold">
						This is a detailed description<br>
						It could be many lines<br>
					</p>
					<div class="is-flex justify-center">
						<router-link :to="'/h/cook/' + clickedRecipe.id" tag="button" class="button primary is-large">
							cook
						</router-link>
					</div>

					<h5>Comments</h5>
					<comments-section :comments="commentList"
														commentBoxPlaceholder="What do you think of this recipe?">
					</comments-section>

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
import { mapGetters, mapActions } from 'vuex'

import CommentsSection from '@/components/CommentsSection.vue'

export default {
	name: 'home',
	components: {
		CommentsSection
	},
	data: function () {
		return {
			columns: [0,1,2],
			boxSizeArray: undefined,
			boxSizes: ['xs','sm','md','lg', 'xl'],
			modalActive: false,
			clickedRecipe: undefined,
			commentList: [
				{
					id: 1,
					commenter: "LindaLovesFood",
					text: "I made this for my kids yesterday, they loved it!!! Thanks!",
					replies: [
						{
							commenter: "RecipeAuthor",
							text: "Hey Linda, I'm glad your kids loved the food. I'll keep posting more recipes!"
						},
						{
							commenter: "BoyfriendOfTheYear",
							text: "That's great! I'll cook this for my girlfriend tonight!"
						}
					]
				},
				{
					id: 2,
					commenter: "The commenter's name",
					text: "This is a comment. Comments should help enhance the recreation aspect of our apps by allowing users to socialize with others about their cooking.",
					replies: [
						{
							commenter: "Replier's name",
							text: "This is a reply to a comment, it could be as long as the user wishes"
						},
						{
							commenter: "Replier's name",
							text: "This is a reply to a comment, it could be as long as the user wishes"
						}
					]
				}
			]
		}
	},
	computed: {
		...mapGetters([
			'filteredRecipes',
			'savedList'
		])
	},
	methods: {
		...mapActions([
			'toggleSaved'
		]),
		getColRecipes: function (col) {
			return _.filter(this.filteredRecipes, (i, n) => {
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
		},
		isSaved: function (id) {
			return _.indexOf(this.savedList, id) !== -1
		},
		onSaveBtnClick: function (recipe) {
			this.toggleSaved(recipe.id)
		},
		genURL: function (url) {
			let actual = url? url :
					'https://www.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg'
			return 'url(' + actual + ')'
		}
	},
	created: function () {
		this.setupGrid()
	},
	watch: {
		filteredRecipes: function () {
			this.setupGrid()
		}
	}
}
</script>
