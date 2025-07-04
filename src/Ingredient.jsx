import './ingredient.css'
 
export default function Ingredient(prop){
   
  const ingredientsListItems = prop.ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
       )
        )
  
     return(
    <>
    <section>

            <h2>Ingredients on hand :</h2>
        <ul>{ingredientsListItems}</ul>
               
               {prop.ingredients.length > 3 && <div className="on">
                    <div className="eki">
                        <h3>Ready for a recipe ?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button className="btn" onClick={prop.getRecipe}>Get a recipe</button>
                </div>}
            </section>
            </>
               )
            }