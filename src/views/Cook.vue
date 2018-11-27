<template>
	<div id="cook" class="content">
		<button class="button back-btn" @click="goBackModalActive = true">
			<i class="fas fa-chevron-left m-r-md"></i>BACK
		</button>

		<div class="columns full-width m-t-md">
			<div class="column justify-center text-center">
				<h4 class="color-default m-t-xs m-b-md text-semibold">Cooking {{ recipe.name }}</h4>
				<div class="steps-nav m-y-md">
					<button :class="['button', 'cooking-step-btn',
													 {'curr': iscurrStep(0),
														'done': currStep > 0}]"
									:disabled="timerActive"
									@click="currStep = 0">
						PREP
					</button>
					<button v-for="step in recipe.steps"
									:class="['button', 'cooking-step-btn',
													 {'curr': iscurrStep(step.n),
														'done': currStep > step.n,
														'remainding': currStep < step.n}
													]"
									:disabled="timerActive"
									@click="onStepClick(step.n)">
						{{ step.n }}
					</button>
				</div>

				<div v-if="iscurrStep(0)" class="columns m-x-lg">
					<div class="column is-7">
						<div class="img-container">
							<div class="img" :style="{'background-image': genURL(recipe.imgURL)}">
							</div>
						</div>
					</div>
					<div class="column is-5 text-center ingredients-list">
						<h5 class="text-semibold color-muted text-left">Here's what you need:</h5>
						<div class="columns m-b-none" v-for="ingredient in recipe.ingredients">
							<div class="column is-7 text-left p-b-sm">
								<h5  class="color-default m-b-none">
									{{ ingredient.name }}
								</h5>
							</div>
							<div class="column is-2 text-right p-b-sm">
								<h5 class="color-default m-b-none">
									{{ ingredient.quantity }}
								</h5>
							</div>
							<div class="column is-3 text-left p-b-sm">
								<h5 class="color-default m-b-none">
									{{ ingredient.unit }}
								</h5>
							</div>
						</div>
						<button class="button primary lg m-y-md" @click="changeStep(1)">
							START COOKING
						</button>
					</div>
				</div>

				<div v-for="step in recipe.steps">
					<div v-show="iscurrStep(step.n)" class="content">
						<cooking-step :step="step"
													:lastStep="recipe.steps.length"
													:timerActive.sync="timerActive"
													@next-step="nextStep()"
													@prev-step="prevStep()"
													@timer-done="timerModalActive = true"
													@ignore-timer="ignoreTimerModalActive = true"
													@finish="finishedModalActive = true">
						</cooking-step>
					</div>
				</div>
			</div>

			<div class="is-flex flex-column align-end p-md">
				<button class="button primary m-y-sm"
								@click="showCommentsTab = !showCommentsTab">
					<i class="fas fa-comment-alt"></i>
				</button>
				<div class="comments-tab" :class="{'fold': !showCommentsTab}">
					<comments-section :comments="recipe.stepsComments"
														commentBoxPlaceholder="Add a comment...">
					</comments-section>
				</div>
			</div>
		</div>

		<b-modal :active.sync="skipModalActive"
						 :width="400"
						 :canCancel="['escape', 'outside']">
			<div class="card">
				<div class="card-content">
					<h4 class="color-default m-b-sm text-semibold">Are you sure you want to jump to this step?</h4>
					<div class="is-flex justify-between">
						<button class="button muted" @click="skipModalActive = false">
							Stay on {{ currStep == 0? ' Prep Step' : ' Step ' + currStep }}
						</button>
						<button class="button primary" @click="changeStep(stepClicked)">
							Jump to {{ stepClicked == 0? ' Prep Step' : ' Step ' + stepClicked }}
						</button>
					</div>
				</div>
			</div>
		</b-modal>

		<b-modal :active.sync="finishedModalActive"
						 :width="275"
						 :canCancel="false">
			<div class="card">
				<div class="card-content">
					<h4 class="color-default text-semibold">YAY! Enjoy your dish!</h4>
					<div class="is-flex justify-between">
						<button class="button muted" @click="finishedModalActive = false">
							Back
						</button>
						<router-link to="/home" tag="button" class="button primary">
							Done Cooking
						</router-link>
					</div>
				</div>
			</div>
		</b-modal>

		<b-modal :active.sync="timerModalActive"
						 :width="300"
						 :canCancel="false">
			<div class="card">
				<div class="card-content">
					<h4 class="color-default text-semibold">The Timer is Done!</h4>
					<div class="is-flex justify-between">
						<button class="button muted" @click="timerModalActive = false">
							Restart Step
						</button>
						<button class="button primary" @click="timerModalNext()">
							Next Step
						</button>
					</div>
				</div>
			</div>
		</b-modal>

		<b-modal :active.sync="ignoreTimerModalActive"
						 :width="350"
						 :canCancel="['escape', 'outside']">
			<div class="card">
				<div class="card-content">
					<h4 class="color-default m-b-sm text-semibold">You haven't started the timer</h4>
					<h6 class="color-muted">Are you sure you want to proceed?</h6>
					<div class="is-flex justify-between">
						<button class="button muted" @click="ignoreTimerModalActive = false">
							Stay in current step
						</button>
						<button class="button primary" @click="timerModalNext()">
							Proceed
						</button>
					</div>
				</div>
			</div>
		</b-modal>

		<b-modal :active.sync="goBackModalActive"
						 :width="300"
						 :canCancel="['escape', 'outside']">
			<div class="card">
				<div class="card-content">
					<h4 class="color-default text-semibold">
						Exit to the home page?
					</h4>
					<div class="is-flex justify-between">
						<button class="button muted sm" @click="goBackModalActive = false">
							Stay
						</button>
						<router-link :to="prevRoute" tag="button" class="button pink sm">
							Exit
						</router-link>
					</div>
				</div>
			</div>
		</b-modal>

	</div>
</template>

<style lang="scss">
</style>

<script>
import _ from 'lodash'
import CommentsSection from '@/components/CommentsSection.vue'
import CookingStep from '@/components/CookingStep.vue'

export default {
	name: 'cook',
	components: {
		CookingStep,
		CommentsSection
	},
	data: function () {
		return {
			currStep: 0,
			finishedModalActive: false,
			skipModalActive: false,
			timerModalActive: false,
			goBackModalActive: false,
			stepClicked: undefined,
			timerActive: false,
			ignoreTimerModalActive: false,
			showCommentsTab: true
		}
	},
	computed: {
		prevRoute: function () {
			let prev = ''
			if (this.$route.params.prev === 'h') {
				prev = 'home'
			} else if (this.$route.params.prev === 's') {
				prev = 'saved'
			} else if (this.$route.params.prev === 'm') {
				prev = 'myrecipes'
			}
			return '/' + prev
		},
		recipe: function() {
			return this.$store.getters.getRecipeById(_.toNumber(this.$route.params.id))
		}
	},
	methods: {
		iscurrStep: function (step) {
			return this.currStep === step
		},
		changeStep: function (n) {
			this.currStep = n
			this.skipModalActive = false
			console.log(this.currStep)
		},
		prevStep: function () {
			this.currStep -= 1
		},
		nextStep: function () {
			this.currStep += 1
		},
		onStepClick: function (n) {
			this.stepClicked = n
			if (Math.abs(this.currStep - n) > 1) {
				this.skipModalActive = true;
			} else {
				this.changeStep(n)
			}
		},
		timerModalNext: function () {
			this.timerModalActive = false
			this.ignoreTimerModalActive = false
			if (this.currStep < this.recipe.steps.length) {
				this.nextStep()
			} else {
				this.finishedModalActive = true
			}
		}
	},
	created: function () {
	}
}
</script>