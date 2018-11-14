<template>
	<div>
		<recipe-section :recipe="recipeToEdit"
										:isEdit="true"
										@bypassRouteGuard="bypassRouteGuard = true">
		</recipe-section>
		<b-modal :active.sync="loseInfoModalActive"
						 :width="300"
						 :canCancel="['escape', 'outside']">
			<div class="card">
				<div class="card-content">
					<h5 class="color-default m-b-sm">
						Are you sure you want to leave? All unsaved information will be lost
					</h5>
					<div class="is-flex justify-between">
						<button class="button primary" @click="promiseReject()">dont leave</button>
						<button class="button pink" @click="promiseResolve()">Leave</button>
					</div>
				</div>
			</div>
		</b-modal>
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
			loseInfoModalActive: false,
			bypassRouteGuard: false
		}
	},
	methods: {
		promiseResolve: () => {},
		promiseReject: () => {}
	},
	created: function() {
		let recipeID = this.$route.params.id
		let recipeInStore = this.$store.getters.getRecipeById(_.toNumber(recipeID))
		this.recipeToEdit = JSON.parse(JSON.stringify(recipeInStore))
	},
	beforeRouteLeave: function (to, from, next) {
		let self = this // this is undefined within promise use self reference
		if (!this.bypassRouteGuard) {
			this.loseInfoModalActive = true
			let p = new Promise( (resolve, reject) => {
				this.promiseReject = reject
				this.promiseResolve = resolve
			});
			p.then(function () {
				next()
			})
			.catch(function () {
				next(false)
			})
			.finally(function () {
				self.loseInfoModalActive = false
			})
		} else {
			next()
		}
	}
}
</script>