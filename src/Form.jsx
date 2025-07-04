import { useState } from 'react'

import './form.css'
import Ingredient from './Ingredient'
import Output from './Output'
import { getRecipeFromMistral } from "./ai"
import { ClipLoader } from "react-spinners";

function Form()
{
  
    const [ingredients, setIngredients] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [recipe, setRecipe ] = useState(false) 
    const [loading, setLoading] = useState(false)
    
      async function getRecipe() {
         setLoading(true);
       const  RecipeMarkDown= await getRecipeFromMistral(ingredients) 
       setRecipe(RecipeMarkDown)
        setLoading(false); 
      
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
        {ingredients.length > 0 && <Ingredient className="get" ingredients={ingredients} 
        getRecipe={getRecipe}/>}
       {loading && (
  <div className="spinner-container">
    <ClipLoader color="#ff9800" size={50} />
    <p>Are your pans ready??? 🍳</p>
  </div>
)}

        {!loading && recipe  && <Output recipe={recipe} />}
             
        
        </>
            
    )
}
export default Form