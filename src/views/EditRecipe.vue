<template>
	<recipe-section :recipe="recipeToEdit"
									:isEdit="true">
	</recipe-section>
</template>

<style scoped lang="scss">
</style>

<script>
import _ from 'lodash'

import RecipeSection from '@/components/RecipeSection.vue'

export default {
	name: 'edit',
	components: {
		RecipeSection
	},
	data: function () {
		return {
			recipeToEdit: {}
		}
	},
	created: function() {
		let recipeInStore = this.$store.getters.getRecipeById(_.toNumber(this.$route.params.id))
		this.recipeToEdit = recipeInStore;
	}
}
</script>