import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		recipeList: [
			{ name: "Carbonara",  duration: 25, private: false, author: "Jack Ma" },
			{ name: "Philly Cheesesteak",  duration: 25, private: false, author: "Jeff Bezos" },
			{ name: "Grilled Cheese Sandwich",  duration: 25, private: false, author: "Steve Jobs" },
			{ name: "Ribeye Steak",  duration: 25, private: false, author: "Bill Gates" },
			{ name: "Recipe 5",  duration: 25, private: false, author: "Mark Cuban" },
			{ name: "Recipe 6",  duration: 25, private: false, author: "Travis Kalanick" },
			{ name: "Recipe 7",  duration: 25, private: false, author: "Steve Wozniak" },
			{ name: "Recipe 8",  duration: 25, private: false, author: "Evan Spiegel" },
			{ name: "Recipe 9",  duration: 25, private: false, author: "Mark Zuckerberg" },
			{ name: "Recipe 10", duration: 25, private: false, author: "Warren Buffet" },
			{ name: "Recipe 11", duration: 25, private: false, author: "Elon Musk" },
			{ name: "Recipe 12", duration: 25, private: false, author: "Brad Pitt" },
			{ name: "Recipe 13", duration: 25, private: false, author: "Arbold Swarznegger" },
			{ name: "Recipe 14", duration: 25, private: false, author: "Matt LeBlanc" },
			{ name: "Recipe 15", duration: 25, private: false, author: "Tom Cruise" },
			{ name: "Recipe 16", duration: 25, private: false, author: "Keanu Reeves" },
			{ name: "Recipe 17", duration: 25, private: false, author: "Jackie Chan" },
			{ name: "Recipe 18", duration: 25, private: false, author: "Gigi Hadid" },
			{ name: "Recipe 19", duration: 25, private: false, author: "Cara Delevingne" },
			{ name: "Recipe 20", duration: 25, private: false, author: "Gal Gadot" },
			{ name: "Recipe 21", duration: 25, private: false, author: "Tom Hiddleston" },
			{ name: "Recipe 22", duration: 25, private: false, author: "Simon Pegg" },
			{ name: "Recipe 23", duration: 25, private: false, author: "Charlize Theron" },
		],
		searchQuery: ''
	},
	getters: {
		filteredRecipes: state => {
			return _.filter(state.recipeList, (recipe) => {
				return _.includes(_.lowerCase(recipe.name), _.lowerCase(state.searchQuery))
			})
		}
	},
	mutations: {
		EXECUTE_SEARCH: (state, query) => {
			state.searchQuery = query
		}
	},
	actions: {
		executeSearch: (context, query) => {
			context.commit("EXECUTE_SEARCH", query)
		}
	}
})

