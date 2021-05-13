function Recipe(title,servings,ingredients) {
    this._title = title;
    this._servings = servings;
    this._ingredients = ingredients;

    this.display = function() {
        console.log(`${this._title}`);
        console.log(`Serves: ${this._servings}`);
        console.log(`Ingredients: `)
        for (let i = 0; i < this._ingredients.length; i++)
            console.log(`- ${this._ingredients[i]}`);
    }

    
}

const recipe1 = new Recipe('Guacamole', 4, ['3 Avocados', '1 Lime', '1 Teaspoon Salt', '1/2 Cup Onion', '3 Tablespoons Cilantro', '2 Diced Tomatoes', '1 Teaspoon Garlic', '1 Pinch Ground Pepper']);
recipe1.display();

