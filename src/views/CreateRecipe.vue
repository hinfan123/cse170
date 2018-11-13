<template>
	<recipe-section :recipe="emptyRecipe"
									:isEdit="false">
	</recipe-section>
</template>

<style scoped lang="scss">
</style>

<script>
import _ from 'lodash'

import RecipeSection from '@/components/RecipeSection.vue'

export default {
	name: 'create',
	components: {
		RecipeSection
	},
	data: function () {
		return {
			emptyRecipe: {
				name: undefined,
				description: undefined,
				duration: undefined,
				author: 'TestUser',
				owns: true,
				private: false,
				imgURL: undefined,
				ingredients: [],
				steps: [{
					n: 1,
					title: undefined,
					gifURL: undefined,
					details: undefined,
					timer: false,
					duration: undefined
				}]
			}
		}
	},
	methods: {

	}
}
</script>