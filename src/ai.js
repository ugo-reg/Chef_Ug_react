import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_PrincessTiana;

const context = `
You are an assistant that receives a list of ingredients that a user has and suggests a
recipe they could make with some or all of those ingredients. You don't need to use 
every ingredient they mention in your recipe. The recipe can include additional ingredients 
they didn't mention, but try not to include too many extra ingredients.
Format your response in markdown to make it easier to render to a web page.include at the end of the recipe "enjoy your meal 💖 Chef-Ug"
`;

export async function getRecipeFromMistral(ingredientsArr) {

    const ingredientsString = ingredientsArr.join(", ");
    const prompt = `generate simple and tasty recipe about ${ingredientsString}`;
    
    const url = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${API_KEY}`;
    try {
        const response = await axios.get(url);
        
        return response.data.answer;
    } catch (err) {
        console.error("API error:", err);
    }
}