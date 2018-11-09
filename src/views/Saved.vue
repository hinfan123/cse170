<template>
	<div id="saved" class="content">
		<div class="recipe-list">
			<div v-for="recipe in recipes" class="recipe-entry">
				<div class="recipe-img" :style="{'background-image': genURL(recipe.imgURL)}">
					<div class="saved-btn">
						<i class="fas fa-heart"></i>
					</div>
				</div>
				<div class="recipe-description">
					<h4 class="text-semibold">{{ recipe.name }}</h4>
					<p class="text-regular color-muted">
						@{{ recipe.author }}<br>
						{{ recipe.description }}
					</p>
					<div class="btn-container">
						<router-link :to="'/s/cook/' + recipe.id" tag="button" class="button primary">
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
import { mapGetters,mapActions } from 'vuex'
export default {
	name: 'saved',
	data: function () {
		return {
		}
	},
	methods: {
		...mapActions([
			'toggleSaved'
		]),
		genURL: function (url) {
			let actual = url? url :
					'https://www.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg'
			return 'url(' + actual + ')'
		}
	},
	computed: {
		...mapGetters(
			{ recipes: 'savedRecipes' }
		)
	},
	created: function () {
	}
}
</script>