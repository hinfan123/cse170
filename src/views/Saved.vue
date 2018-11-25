<template>
	<div id="saved" class="content">
		<div class="recipe-list">
			<div v-for="recipe in recipes" class="recipe-entry">
				<div class="recipe-img" :style="{'background-image': genURL(recipe.imgURL)}"></div>
				<div class="recipe-description">
					<h4 class="text-semibold color-default">{{ recipe.name }}</h4>
					<p class="text-regular color-muted">
						@{{ recipe.author }}<br>
						{{ recipe.description }}
					</p>
					<div class="btn-container">
						<button class="button muted sm" @click="toggleSaved(recipe.id)">
							Unsave
						</button>
						<router-link :to="'/s/cook/' + recipe.id" tag="button" class="button sm primary">
							Cook
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
		])
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