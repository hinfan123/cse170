<template>
	<div>
		<div id="top-bar">
			<router-link to="/home" tag="div" class="logo-container text-bold is-unselectable">
				EZ<i class="fas fa-utensils m-l-sm"></i>
			</router-link>

			<div class="input-container">
				<div class="icon-container">
					<i class="fas fa-search"></i>
				</div>
				<input type="text"
							 placeholder="Search recipes on EZ-Chef..."
							 v-model="searchQuery"
							 @keyup="debounceSearch()">
				<div v-if="searchQuery" class="icon-container clear" @click="clearQuery()">
					<i class="fas fa-times"></i>
				</div>
			</div>

			<div id="nav">
				<router-link to="/home" class="is-unselectable">
					Home
				</router-link>
				<router-link to="/saved" class="is-unselectable">
					Saved
				</router-link>
				<router-link to="/myrecipes"
										 class="is-unselectable"
										 :class="{'router-link-active router-link-exact-active': inEdit}">
					My Recipes
				</router-link>
				<router-link to="/profile" class="is-unselectable">
					Profile
				</router-link>
				<router-link to="/create/new"
										 class="is-unselectable"
										 :class="{'router-link-active router-link-exact-active': inCreate}">
					New Recipe
				</router-link>
			</div>
		</div>

		<div id="main-content" class="content">
			<router-view/>
		</div>

	</div>
</template>

<style lang="scss">
</style>

<script>
import _ from 'lodash'
import { mapActions } from 'vuex'

export default {
	name: 'main-content',
	data: function () {
		return {
			searchQuery: ''
		}
	},
	methods: {
		...mapActions([
			'executeSearch'
		]),
		clearQuery: function () {
			this.searchQuery = ''
			this.debounceSearch()
		}
	},
	computed: {
		inEdit: function () {
			return this.$route.name === 'edit'
		},
		inCreate: function () {
			return this.$route.name === 'create'
		}
	},
	created () {
		this.debounceSearch = _.debounce(
			function () {
				this.executeSearch(this.searchQuery)
				this.$router.push('/home')
			}, 400
		)
	}
}
</script>