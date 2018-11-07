<template>
	<div class="content">
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
			<cooking-timer :duration="10"
										 :timerActive.sync="timerActive"
										 @timer-done="onTimerDone()">
			</cooking-timer>
		</div>

		<br>
		<div class="step-nav-container">
			<button @click="$emit('prev-step')"
							:disabled="timerActive">
				back
			</button>
			<button v-if="step.n < lastStep"
							@click="$emit('next-step')"
							:disabled="timerActive">
				next
			</button>
			<button v-if="step.n >= lastStep"
							@click="$emit('finish')"
							:disabled="timerActive">
				finish
			</button>
		</div>
	</div>
</template>

<style lang="scss">
</style>

<script>
import _ from 'lodash'
import CookingTimer from '@/components/CookingTimer.vue'

export default {
	name: 'cooking-step',
	components: {
		CookingTimer
	},
	data: function () {
		return {
			timerModalActive: false,
			timerActive: false
		}
	},
	props: {
		step: { },
		lastStep: 0
	},
	computed: {
	},
	methods: {
		onTimerDone: function () {
			if (this.step.n >= this.lastStep) {
				this.$emit('finish')
			} else {
				this.$emit('timer-done')
			}
		}
	},
	created: function () {
	},
	watch: {
		timerActive: function () {
			this.$emit('update:timerActive', this.timerActive)
		}
	}
}
</script>