<template>
	<div id="cook">
		<div class="top-bar-cook">
			<router-link :to="prevRoute" tag="div" class="back-btn">
				<i class="fas fa-chevron-left"></i>
			</router-link>
			<h2>Cooking {{ recipe.name }}</h2>
		</div>

		<div class="steps-nav">
			<div v-bind:class="['step-btn', {'current': iscurrStep(0)}]"
					 @click="currStep = 0">
				PREP
			</div>
			<div v-for="step in steps"
					 v-bind:class="['step-btn', {'current': iscurrStep(step.n)}]"
					 @click="onStepClick(step.n)">
				{{ step.n }}
			</div>
		</div>

		<div v-if="iscurrStep(0)" class="content">
			<div class="img-container">
				<div class="img-carousel-btn">
					<i class="fas fa-chevron-left"></i>
				</div>
				<div class="img">

				</div>
				<div class="img-carousel-btn">
					<i class="fas fa-chevron-right"></i>
				</div>
			</div>
			<div class="ingredient-container">
				<h3>Here's what you need:</h3><br>
				<div v-for="ingredient in ingredientsList" class="ingredient-entry">
					<h4>{{ ingredient.name }}</h4>
					<div class="ingredient-amount">
						<h4>{{ ingredient.amount }}</h4>
						<h4>{{ ingredient.units }}</h4>
					</div>
				</div>
			</div>

			<button class="start-btn" @click="changeStep(1)">
				START COOKING
			</button>
		</div>

		<div v-for="step in steps">
			<div v-if="iscurrStep(step.n)" class="content">
				<h2 class="m-b-sm">{{step.title}}</h2>
				<div class="img-container">
					<div class="img">

					</div>
				</div>
				<div class="instruction-detail-container">
					<h6>Some instruction detail</h6>
					<h6>Some other instruction detail</h6>
					<h6>Even more instruction detail</h6>
					<h6>Last line of instruction detail</h6>
				</div>

				<div v-if="step.timer" class="timer-container">
					<!-- <h2>05:30</h2>
					<button @click="startTimer()">
						start timer
					</button> -->
					<cooking-timer v-bind:duration="10"
												 v-on:timer-done="timerModalActive = true">
					</cooking-timer>
				</div>

				<br>
				<div class="step-nav-container">
					<button @click="prevStep()">
						back
					</button>
					<button v-if="step.n < steps.length" @click="nextStep()">
						next
					</button>
					<button v-if="currStep >= steps.length" @click="finishedModalActive = true">
						finish
					</button>
				</div>
			</div>
		</div>

		<b-modal :active.sync="modalActive"
						 :width="400"
						 :canCancel="false">
			<div class="card">
				<div class="card-content">
					<h2 class="color-default m-b-sm text-semibold">Are you sure you want to jump to this step?</h2>
					<div class="is-flex justify-between">
						<button class="button green" @click="modalActive = false">
							Stay on Step {{ currStep }}
						</button>
						<button class="button pink" @click="changeStep(stepClicked)">
							Jump to Step {{ stepClicked }}
						</button>
					</div>
				</div>
			</div>
		</b-modal>

		<b-modal :active.sync="finishedModalActive"
						 :width="400"
						 :canCancel="false">
			<div class="card">
				<div class="card-content">
					<h2 class="color-default m-b-sm text-semibold">YAY! Enjoy your dish!</h2>
					<div class="is-flex justify-between">
						<button class="button primary" @click="reset()">
							start over
						</button>
						<router-link to="/" tag="button" class="button">
							back to home
						</router-link>
					</div>
				</div>
			</div>
		</b-modal>

		<b-modal :active.sync="timerModalActive"
						 :width="350"
						 :canCancel="false">
			<div class="card">
				<div class="card-content">
					<h2 class="color-default m-b-sm text-semibold">Timer is Done!!</h2>
					<div class="is-flex justify-between">
						<button class="button primary" @click="timerModalActive = false">
							Restart Step
						</button>
						<button class="button primary" @click="timerModalNext()">
							Next Step
						</button>
					</div>
				</div>
			</div>
		</b-modal>

	</div>
</template>

<style lang="scss">
</style>

<script>
import store from '../store'
import _ from 'lodash'

import CookingTimer from '../components/CookingTimer.vue'

export default {
	name: 'cook',
	components: {
		CookingTimer
	},
	data: function () {
		return {
			currStep: 0,
			finishedModalActive: false,
			modalActive: false,
			timerModalActive: false,
			stepClicked: undefined,
			ingredientsList: [
				{ name: "Ingredient 1", amount: 1, units: "L" },
				{ name: "Ingredient 2", amount: 2, units: "mL" },
				{ name: "Ingredient 3", amount: 3, units: "kg" },
				{ name: "Ingredient 4", amount: 4, units: "g" },
				{ name: "Ingredient 5", amount: 5, units: "mL" },
				{ name: "Ingredient 6", amount: 6, units: "g" },
			],
			steps: [
				{ n: 1, title: "First Step has timer", timer: true },
				{ n: 2, title: "Second Step has no timer", timer: false },
				{ n: 3, title: "Third Step also has no timer", timer: false },
				{ n: 4, title: "Final Step has timer!", timer: true }
			]
		}
	},
	computed: {
		prevRoute: function () {
			let prev = ''
			if (this.$route.params.prev === 'h') {
				prev = ''
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
			this.modalActive = false;
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
				this.modalActive = true;
			} else {
				this.changeStep(n)
			}
		},
		reset: function () {
			this.finishedModalActive = false
			this.changeStep(0)
		},
		timerModalNext: function () {
			this.timerModalActive = false
 			if (this.currStep < this.steps.length) {
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