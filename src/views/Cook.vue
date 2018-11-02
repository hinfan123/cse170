<template>
	<div id="cook">
		<div class="top-bar-cook">
			<router-link :to="prevRoute" tag="div" class="back-btn">
				<i class="fas fa-chevron-left"></i>
			</router-link>
			<h2>Cooking "Some Recipe"</h2>
		</div>

		<div class="steps-nav">
			<div v-bind:class="['step-btn', {'current': isCurrPage(0)}]"
					 @click="changePage(0)">
				PREP
			</div>
			<div v-for="step in steps"
					 v-bind:class="['step-btn', {'current': isCurrPage(step.n)}]"
					 @click="changePage(step.n)">
				{{ step.n }}
			</div>
		</div>

		<div v-if="isCurrPage(0)" class="content">
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

			<button class="start-btn" @click="changePage(1)">
				START COOKING
			</button>
		</div>

		<div v-for="step in steps">
			<div v-if="isCurrPage(step.n)" class="content">
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
					<h2>05:30</h2>
					<button @click="startTimer()">
						start timer
					</button>
				</div>

				<br>
				<div class="step-nav-container">
					<button @click="prevPage()">
						back
					</button>
					<button v-if="step.n < steps.length" @click="nextPage()">
						next
					</button>
					<router-link to="/finish" tag="button" v-if="step.n >= steps.length">
						finish
					</router-link>
				</div>
			</div>
		</div>


	</div>
</template>

<style lang="scss">
</style>

<script>
export default {
	name: 'cook',
	data: function () {
		return {
			currPage: 0,
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
		}
	},
	methods: {
		isCurrPage: function (page) {
			return this.currPage === page
		},
		changePage: function (n) {
			this.currPage = n
		},
		prevPage: function () {
			this.currPage -= 1
		},
		nextPage: function () {
			this.currPage += 1
		},
		startTimer: function () {

		}
	},
	created: function () {
	}
}
</script>