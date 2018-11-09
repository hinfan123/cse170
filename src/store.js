import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		recipeList: [
			{
				id: 1,
				name: "Thai Spicy Basil Chicken",
				duration: 25,
				private: false,
				author: "Kevin Malone",
				owns: false,

				ingredients: []
			},
			{
				id: 2,
				name: "Philly Cheesesteak",
				duration: 25,
				private: false,
				author: "Jeff Bezos",
				owns: false,
				ingredients: []
			},
			{
				id: 3,
				name: "Grilled Cheese",
				duration: 25,
				private: false,
				author: "Steve Jobs",
				owns: false,
				ingredients: []
			},
			{
				id: 4,
				name: "Ribeye Steak",
				duration: 25,
				private: false,
				author: "Bill Gates",
				owns: false,
				ingredients: []
			},
			{
				id: 5,
				name: "Recipe 5",
				duration: 25,
				private: false,
				author: "Mark Cuban",
				owns: false,
				ingredients: []
			},
			{
				id: 6,
				name: "Recipe 6",
				duration: 25,
				private: false,
				author: "Travis Kalanick",
				owns: false,
				ingredients: []
			},
			{
				id: 7,
				name: "Recipe 7",
				duration: 25,
				private: false,
				author: "Steve Wozniak",
				owns: false,
				ingredients: []
			},
			{
				id: 8,
				name: "Recipe 8",
				duration: 25,
				private: false,
				author: "Evan Spiegel",
				owns: false
			},
			{
				id: 9,
				name: "Recipe 9",
				duration: 25,
				private: false,
				author: "Mark Zuckerberg",
				owns: false,
				ingredients: []
			},
			{
				id: 10,
				name: "Recipe 10",
				duration: 25,
				private: false,
				author: "Warren Buffet",
				owns: false,
				ingredients: []
			},
			{
				id: 11,
				name: "Recipe 11",
				duration: 25,
				private: false,
				author: "Elon Musk",
				owns: false,
				ingredients: []
			},
			{
				id: 12,
				name: "Recipe 12",
				duration: 25,
				private: false,
				author: "Brad Pitt",
				owns: false,
				ingredients: []
			},
			{
				id: 13,
				name: "Recipe 13",
				duration: 25,
				private: false,
				author: "Arbold Swarznegger",
				owns: false,
				ingredients: []
			},
			{
				id: 14,
				name: "Recipe 14",
				duration: 25,
				private: false,
				author: "Matt LeBlanc",
				owns: false,
				ingredients: []
			},
			{
				id: 15,
				name: "Recipe 15",
				duration: 25,
				private: false,
				author: "Tom Cruise",
				owns: false,
				ingredients: []
			},
			{ id: 16,
				name: "Recipe 16",
				duration: 25,
				private: false,
				author: "Keanu Reeves",
				owns: false,
				ingredients: []
			},
			{ id: 17,
				name: "Recipe 17",
				duration: 25,
				private: false,
				author: "Jackie Chan",
				owns: false,
				ingredients: []
			},
			{ id: 18,
				name: "Recipe 18",
				duration: 25,
				private: false,
				author: "Gigi Hadid",
				owns: false,
				ingredients: []
			},
			{ id: 19,
				name: "Recipe 19",
				duration: 25,
				private: false,
				author: "Cara Delevingne",
				owns: false,
				ingredients: []
			},
			{ id: 20,
				name: "Recipe 20",
				duration: 25,
				private: false,
				author: "Gal Gadot",
				owns: false,
				ingredients: []
			},
			{ id: 21,
				name: "Recipe 21",
				duration: 25,
				private: false,
				author: "Tom Hiddleston",
				owns: false,
				ingredients: []
			},
			{ id: 22,
				name: "Recipe 22",
				duration: 25,
				private: false,
				author: "Simon Pegg",
				owns: false,
				ingredients: []
			},
			{ id: 23,
				name: "Recipe 23",
				duration: 25,
				private: false,
				author: "Charlize Theron",
				owns: false,
				ingredients: []
			},
			/*{ id: 24,
				name: "My Private Recipe",
				duration: 25,
				private: true,
				author: "TestUser",
				owns: true,
				ingredients: []
			},
			{ id: 25,
				name: "My Public Recipe",
				duration: 25,
				private: false,
				author: "TestUser",
				owns: true,
				ingredients: []
			},*/
		],
		searchQuery: '',
		saved: [1,3,4,5,8,12],
		idCounter: 100
	},
	getters: {
		filteredRecipes: state => {
			return _.filter(state.recipeList, (recipe) => {
				return _.includes(_.lowerCase(recipe.name), _.lowerCase(state.searchQuery))
			})
		},
		savedRecipes: state => {
			return _.filter(state.recipeList, (recipe) => {
				return _.indexOf(state.saved, recipe.id) !== -1
			})
		},
		getRecipeById: (state) => (id) => {
			return _.find(state.recipeList, {'id': id})
		},
		savedList: (state) => {
			return state.saved
		},
		myPublishedRecipeList:(state) => {
			return _.filter(state.recipeList, (recipe) => {
				return recipe.owns && !recipe.private
			})
		},
		myPrivateRecipeList:(state) => {
			return _.filter(state.recipeList, (recipe) => {
				return recipe.owns && recipe.private
			})
		}
	},
	mutations: {
		EXECUTE_SEARCH: (state, query) => {
			state.searchQuery = query
		},
		SAVE_RECIPE: (state, id) => {
			state.saved.push(id)
		},
		UNSAVE_RECIPE: (state, id) => {
			state.saved.splice(state.saved.indexOf(id), 1)
		},
		ADD_RECIPE: (state, payload) => {
			payload.id = state.idCounter
			state.idCounter += 1
			state.recipeList.unshift(payload)
		},
	},
	actions: {
		executeSearch: (context, query) => {
			context.commit("EXECUTE_SEARCH", query)
		},
		toggleSaved: (context, id) => {
			let idx = context.state.saved.indexOf(id)
			if (idx === -1) {
				context.commit("SAVE_RECIPE", id)
			} else {
				context.commit("UNSAVE_RECIPE", id)
			}
		},
		saveRecipe: (context, payload) => {
			context.commit('ADD_RECIPE', payload)
		}
	}
})

