<template>
	<div class="wrapper">
		<recipe-section :recipe="recipeToEdit"
										:isEdit="true"
										@bypassRouteGuard="bypassRouteGuard = true">
		</recipe-section>
		<b-modal :active.sync="loseInfoModalActive"
						 :width="300"
						 :canCancel="['escape', 'outside']">
			<div class="card">
				<div class="card-content">
					<h4 class="color-default text-semiboldm-b-sm">
						Leave this page?
					</h4>
					<h6 class="color-muted">
						All unsaved information will be lost
					</h6>
					<div class="is-flex justify-between">
						<button class="button muted sm" @click="promiseReject()">Stay</button>
						<button class="button pink sm" @click="promiseResolve()">Leave</button>
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