<template>
	<div class="wrapper">
		<recipe-section :recipe="recipeToCreate"
										:isEdit="false"
										@bypassRouteGuard="bypassRouteGuard = true">
		</recipe-section>
		<b-modal :active.sync="loseInfoModalActive"
						 :width="300"
						 :canCancel="['escape', 'outside']">
			<div class="card">
				<div class="card-content">
					<h4 class="color-default text-semibold m-b-sm">
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
import { mapGetters } from 'vuex'

import RecipeSection from '@/components/RecipeSection.vue'

export default {
	name: 'create',
	components: {
		RecipeSection
	},
	data: function () {
		return {
			bypassRouteGuard: false,
			loseInfoModalActive: false,
			recipeToCreate: undefined,
			emptyRecipe: {
				name: undefined,
				description: undefined,
				duration: undefined,
				author: 'TestUser',
				owns: true,
				private: false,
				imgURL: undefined,
				ingredients: [],
				stepsComments: [],
				recipeComments: [],
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
		promiseResolve: () => {},
		promiseReject: () => {}
	},
	created: function () {
		if (this.$route.params.id === 'new') {
			this.recipeToCreate = this.emptyRecipe
		} else {
			let recipeID = this.$route.params.id
			let recipeToDuplicate = this.$store.getters.getRecipeById(_.toNumber(recipeID))
			let newRecipe = JSON.parse(JSON.stringify(recipeToDuplicate))
			newRecipe.id = undefined
			this.recipeToCreate = newRecipe
		}
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
			}).catch(function () {
				next(false)
			}).finally(function () {
				self.loseInfoModalActive = false
			})
		} else {
			next()
		}
	}
}
</script>