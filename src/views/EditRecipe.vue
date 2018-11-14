<template>
	<div>
		<recipe-section :recipe="recipeToEdit"
										:isEdit="true">
		</recipe-section>
		<!-- <b-modal :active.sync="loseInfoModalActive"
						 :width="400"
						 :canCancel="['escape', 'outside']">
			<div class="card">
				<div class="card-content">
					<h3 class="color-default m-b-sm">
						Are you sure you want to leave? All unsaved information will be lost
					</h3>
					<div class="is-flex justify-between">
						<button class="button primary" @click="rejectRoutePromise()">dont leave</button>
						<button class="button pink" @click="resolveRoutePromise()">Leave</button>
					</div>
				</div>
			</div>
		</b-modal> -->
	</div>
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
			recipeToEdit: {},
			loseInfoModalActive: false
		}
	},
	methods: {
	},
	created: function() {
		let recipeInStore = this.$store.getters.getRecipeById(_.toNumber(this.$route.params.id))
		this.recipeToEdit = JSON.parse(JSON.stringify(recipeInStore));
	},
	/*beforeRouteLeave: function (to, from, next) {
			this.loseInfoModalActive = true
			let p = new Promise( function (resolve, reject) {

		    reject()
			});

			p.then(function () {
			next()
		})
		.catch(function () {
			this.loseInfoModalActive = false
			next(false)
		});
	}*/
}
</script>