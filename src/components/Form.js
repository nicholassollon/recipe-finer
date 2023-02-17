import React from "react";
import "../Form.css";
import { useState } from "react";
function Form() {

   
  //Form inputs to be posted
  const [recipe, updateRecipe] = useState("");
  const [name, updateName] = useState("");
  const [ingredients, updateIngredients] = useState([]);
  const [ingredient, updateIngredient] = useState("");
  const [image, updateImage] = useState("");
  const [allergens, updateAllergens] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [isLoading, updateIsLoading] = useState(false);
  //Functions to handle state, and form related events
  function handleIngredients() {
    if (ingredient.length > 0) updateIngredients([...ingredients, ingredient]);
    updateIngredient("");
  }
  function handleRecipe(recipe) {
    updateRecipe(recipe.target.value);
  }
  function handleName(name) {
    updateName(name.target.value);
  }
  function handleIngredient(e) {
    updateIngredient(e.target.value);
  }
  function handleImage(image) {
    updateImage(image.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    updateIsLoading(true);
    fetch("http://localhost:3004/recipes", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: ingredients,
        recipe: recipe,
        allergens: allergens,
        image: image,
        name: name,
      }),
    }).then((response) => {
      updateIsLoading(false);
    });
  }
  //[peanuts, fish, shellfish, dairy, soy, gluten, egg]
  //Allergen update function
  function handleAllergen(aller) {
    const newAllergens = [...allergens];
    newAllergens[aller] = !newAllergens[aller];
    updateAllergens(newAllergens);
  }
  //Prettying functions
  function displayIngredients() {
    const display = [];
    for (let i = 0; i < ingredients.length; i++)
      if (i !== ingredients.length - 1) display.push(ingredients[i] + ", ");
      else display.push(ingredients[i]);
    return display;
  }
  return (<div class="d1">
        <label class="l1">
            <input
            class="i1"
            placeholder="Recipe Name"
                name="recipeName"
                type="text"
                onChange={handleName}
                value={name} />
        </label>
        <br /><br />
        <label class="l2">
            <input 
                class="i2"
                placeholder='Recipe Picture'
                name="image"
                type="text"
                onChange={handleImage}
                value={image} />
        </label>
        <br /><br />



        <div>
            <label class="l3">
            <input
                class="i3"
                placeholder="Ingredient"
                id="inputIngredient"
                name="ingredient"
                type="text"
                onChange={handleIngredient}
                value={ingredient} />

        </label>

            <p class="ingredients">Ingredients:{displayIngredients()}</p>
            <br /></div>
        <button class="add" onClick={handleIngredients}>Add Ingredient</button>
        <br /><br />




        {/* [peanuts, fish, shellfish, dairy, soy, gluten, egg] */}

        <p class="ques">Does your recipe or ingredients contain...</p><br />
        <input class="peanut" onClick={() => handleAllergen(0)} type="checkbox" name="peanut" value="peanut" />
        <label class="peanut2" for="peanut">Peanut</label>
        <input class="fish" onClick={() => handleAllergen(1)} type="checkbox" name="fish" value="fish" />
        <label class="fish2" for="fish">Fish</label>
        <input class="shellfish" onClick={() => handleAllergen(2)} type="checkbox" name="shellfish" value="shellfish" />
        <label class="shellfish2" for="shellfish">Shellfish</label>

        <br />
        <input class="dairy" onClick={() => handleAllergen(3)} type="checkbox" name="dairy" value="dairy" />
        <label class="dairy2" for="dairy">Dairy</label>
        <input class="soy" onClick={() => handleAllergen(4)} type="checkbox" name="soy" value="soy" />
        <label class="soy2" for="soy">Soy</label>
        <input class="gluten" onClick={() => handleAllergen(5)} type="checkbox" name="gluten" value="gluten" />
        <label class="gluten2" for="gluten">Gluten</label>
        <input class="egg" onClick={() => handleAllergen(6)} type="checkbox" name="egg" value="egg" />
        <label class="egg2" for="egg">Egg</label>
        <br /><br />
        <label>
        <textarea
            class="text"
            placeholder="Recipe Steps"
          name="recipe"
          value={recipe}
          onChange={handleRecipe}
        />
        </label>
        <br /><br />
        <button class="sub" type="submit" onClick={handleSubmit}>Submit Recipe</button>
    </div>)

}
export default Form;
