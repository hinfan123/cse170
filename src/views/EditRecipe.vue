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

		}
	},
	computed: {
		recipeToEdit: function() {
			return this.$store.getters.getRecipeById(_.toNumber(this.$route.params.id))
		}
	},
	methods: {

	},
	created: function() {
	}
}
</script>