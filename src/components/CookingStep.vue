<template>
	<div class="content">
		<h2 class="m-b-sm text-semibold color-default">{{ step.title }}</h2>
		<div class="img-container">
			<div class="img" :style="{'background-image': genURL(step.gifURL)}">

			</div>
		</div>
		<div class="step-detail text-left">
			<p class="color-default text-regular">
				{{ step.details }}
			</p>
		</div>

		<div v-if="step.timer" class="timer-container m-t-md">
			<cooking-timer :duration="step.duration"
										 :timerActive.sync="timerActive"
										 @timer-done="onTimerDone()"
										 @has-started="hasStarted = true">
			</cooking-timer>
		</div>

		<br>
		<div class="is-flex justify-between">
			<button class="button muted md m-x-md"
							@click="$emit('prev-step')"
							:disabled="timerActive">
				Back
			</button>
			<button v-if="step.n < lastStep"
							class="button muted md m-x-md"
							@click="onNext()"
							:disabled="timerActive">
				Next
			</button>
			<button v-if="step.n >= lastStep"
							class="button muted md m-x-md"
							@click="onFinish()"
							:disabled="timerActive">
				Finish
			</button>
		</div>
	</div>
</template>

<style scoped lang="scss">
.img-container {
	width: 450px;
}
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
			timerActive: false,
			hasStarted: false
		}
	},
	props: {
		step: { },
		lastStep: 0
	},
	computed: {
		timerOK: function () {
			return !this.step.timer || this.hasStarted
		}
	},
	methods: {
		onTimerDone: function () {
			if (this.step.n >= this.lastStep) {
				this.$emit('finish')
			} else {
				this.$emit('timer-done')
			}
		},
		onNext: function () {
			if (this.timerOK) {
				this.$emit('next-step')
			} else {
				this.$emit('ignore-timer')
			}
		},
		onFinish: function () {
			if (this.timerOK) {
				this.$emit('finish')
			} else {
				this.$emit('ignore-timer')
			}
		},
		genURL: function (url) {
			let actual = url? url :
					'https://www.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg'
			return 'url(' + actual + ')'
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