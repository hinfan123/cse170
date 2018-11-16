<template>
	<div>
		<recipe-section :recipe="emptyRecipe"
										:isEdit="false"
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
						<button class="button primary" @click="promiseReject()">stay</button>
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
	name: 'create',
	components: {
		RecipeSection
	},
	data: function () {
		return {
			bypassRouteGuard: false,
			loseInfoModalActive: false,
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