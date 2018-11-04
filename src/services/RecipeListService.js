import Vue from 'vue'

export default {
	getRecipeList() {
		return {
			res: [
				{ name: "Recipe 1",  duration: 25, author: "Jack Ma" },
				{ name: "Recipe 2",  duration: 25, author: "Jeff Bezos" },
				{ name: "Recipe 3",  duration: 25, author: "Steve Jobs" },
				{ name: "Recipe 4",  duration: 25, author: "Bill Gates" },
				{ name: "Recipe 5",  duration: 25, author: "Mark Cuban" },
				{ name: "Recipe 6",  duration: 25, author: "Travis Kalanick" },
				{ name: "Recipe 7",  duration: 25, author: "Steve Wozniak" },
				{ name: "Recipe 8",  duration: 25, author: "Evan Spiegel" },
				{ name: "Recipe 9",  duration: 25, author: "Mark Zuckerberg" },
				{ name: "Recipe 10", duration: 25, author: "Warren Buffet" },
				{ name: "Recipe 11", duration: 25, author: "Elon Musk" },
				{ name: "Recipe 12", duration: 25, author: "Brad Pitt" },
				{ name: "Recipe 13", duration: 25, author: "Arbold Swarznegger" },
				{ name: "Recipe 14", duration: 25, author: "Matt LeBlanc" },
				{ name: "Recipe 15", duration: 25, author: "Tom Cruise" },
				{ name: "Recipe 16", duration: 25, author: "Keanu Reeves" },
				{ name: "Recipe 17", duration: 25, author: "Jackie Chan" },
				{ name: "Recipe 18", duration: 25, author: "Gigi Hadid" },
				{ name: "Recipe 19", duration: 25, author: "Cara Delevingne" },
				{ name: "Recipe 20", duration: 25, author: "Gal Gadot" },
				{ name: "Recipe 21", duration: 25, author: "Tom Hiddleston" },
				{ name: "Recipe 22", duration: 25, author: "Simon Pegg" },
				{ name: "Recipe 23", duration: 25, author: "Charlize Theron" },
			]
		}
	}
	/*getRecipeList(succes, error) {
		Vue.http.get('user').then(
			(response) => {
				succes(response.data)
			},
			(response) => {
				error(response)
			}
		)
	}*/
}