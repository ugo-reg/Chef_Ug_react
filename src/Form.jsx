import { useState } from 'react'

import './form.css'
import Ingredient from './Ingredient'
import Output from './Output'
import { getRecipeFromMistral } from "./ai"
import App from './App'
function Form()
{
  
    const [ingredients, setIngredients] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [recipe, setRecipe ] = useState(false) 

    
      async function getRecipe() {
       const  RecipeMarkDown= await getRecipeFromMistral(ingredients) 
       setRecipe(RecipeMarkDown)
      
    }
   
        function spice(formData){
          const newIngredient = formData.get("ingredient")
          setIngredients(prevIngredients => [...prevIngredients, newIngredient])
           setInputValue("");
        }
    return( 
        <>
        <form action={spice} className="form">
           
            <input   onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="e.g: parsley" required name="ingredient"/>
            <button>+Add ingredient</button>
           
        </form>
        {ingredients.length > 0 && <Ingredient ingredients={ingredients} 
        getRecipe={getRecipe}/>}
        
        {recipe  && <Output recipe={recipe} />}
             
            
        </>
            
    )
}
export default Form