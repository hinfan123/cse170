import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		recipeList: [
			{
				id: 1,
				name: "Carbonara",
				duration: 25,
				private: false,
				author: "Jack Ma"
			},
			{
				id: 2,
				name: "Philly Cheesesteak",
				duration: 25,
				private: false,
				author: "Jeff Bezos"
			},
			{
				id: 3,
				name: "Grilled Cheese",
				duration: 25,
				private: false,
				author: "Steve Jobs"
			},
			{
				id: 4,
				name: "Ribeye Steak",
				duration: 25,
				private: false,
				author: "Bill Gates"
			},
			{
				id: 5,
				name: "Recipe 5",
				duration: 25,
				private: false,
				author: "Mark Cuban"
			},
			{
				id: 6,
				name: "Recipe 6",
				duration: 25,
				private: false,
				author: "Travis Kalanick"
			},
			{
				id: 7,
				name: "",
				duration: 25,
				private: false,
				author: "Steve Wozniak"
			},
			{
				id: 8,
				name: "Recipe 8",
				duration: 25,
				private: false,
				author: "Evan Spiegel"
			},
			{
				id: 9,
				name: "Recipe 9",
				duration: 25,
				private: false,
				author: "Mark Zuckerberg"
			},
			{
				id: 10,
				name: "Recipe 10",
				duration: 25,
				private: false,
				author: "Warren Buffet"
			},
			{
				id: 11,
				name: "Recipe 11",
				duration: 25,
				private: false,
				author: "Elon Musk"
			},
			{
				id: 12,
				name: "Recipe 12",
				duration: 25,
				private: false,
				author: "Brad Pitt"
			},
			{
				id: 13,
				name: "Recipe 13",
				duration: 25,
				private: false,
				author: "Arbold Swarznegger"
			},
			{
				id: 14,
				name: "Recipe 14",
				duration: 25,
				private: false,
				author: "Matt LeBlanc"
			},
			{
				id: 15,
				name: "Recipe 15",
				duration: 25,
				private: false,
				author: "Tom Cruise"
			},
			{ id: 16,
				name: "Recipe 16",
				duration: 25,
				private: false,
				author: "Keanu Reeves"
			},
			{ id: 17,
				name: "Recipe 17",
				duration: 25,
				private: false,
				author: "Jackie Chan"
			},
			{ id: 18,
				name: "Recipe 18",
				duration: 25,
				private: false,
				author: "Gigi Hadid"
			},
			{ id: 19,
				name: "Recipe 19",
				duration: 25,
				private: false,
				author: "Cara Delevingne"
			},
			{ id: 20,
				name: "Recipe 20",
				duration: 25,
				private: false,
				author: "Gal Gadot"
			},
			{ id: 21,
				name: "Recipe 21",
				duration: 25,
				private: false,
				author: "Tom Hiddleston"
			},
			{ id: 22,
				name: "Recipe 22",
				duration: 25,
				private: false,
				author: "Simon Pegg"
			},
			{ id: 23,
				name: "Recipe 23",
				duration: 25,
				private: false,
				author: "Charlize Theron"
			},
		],
		searchQuery: '',
		saved: [1,3,4,5,8,12],
		myPublishedRecipes: [
			{id: "Ice Soup"},
			{id: "Vegan Water"},
			{id: "Burritos Locos Tacos"},
			{id: "Kevin's Famous Chili"},
			],
		myPrivateRecipes: [
			{id: "Lo-mein"},
			{id: "Creole Sauce"}
			],
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
		myPublishedRecipes: state => {
			return _.filter(state.myPublishedRecipes, (recipe) => {
				return _.indexOf(state.myPublishedRecipes, recipe.id) !== -1
			})
		},
		myPrivateRecipes: state => {
			return _.filter(state.myPrivateRecipes, (recipe) => {
				return _.indexOf(state.myPrivateRecipes, recipe.id) !== -1
			})
		},
		getRecipeById: (state) => (id) => {
			return _.find(state.recipeList, {'id': id})
		},
		savedList: (state) => {
			return state.saved
		},
		myPublishedRecipeList:(state) => {
			return state.myPublishedRecipes
		},
		myPrivateRecipeList:(state) => {
			return state.myPublishedRecipes
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
		SAVE_PUBLISHEDRECIPE: (state,id) => {
			state.myPublishedRecipes.push(id)
		},
		SAVE_PRIVATERECIPE: (state,id) => {
			state.myPrivateRecipes.push(id)
		},
		ADD_RECIPE(state,payload){
			state.myPublishedRecipes.unshift(payload)
		}
	},
	actions: {
		executeSearch: (context, query) => {
			context.commit("EXECUTE_SEARCH", query)
		},
		toggleSaved: (context, id) => {
			let idx = context.state.saved.indexOf(id)
			if(idx === -1) {
				context.commit("SAVE_RECIPE", id)
			} else {
				context.commit("UNSAVE_RECIPE", id)
			}
		},
		addRecipe(context,payload){
			context.commit('ADD_RECIPE',payload);
		}
	}
})

