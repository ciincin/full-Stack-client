import { useEffect, useState } from "react";

function useFetchRecipes() {

    const recipeApi = 'https://dummyjson.com/recipes'

    const [recipes, setRecipes]= useState([])
    const [errorRecipes,setErrorRecipes] = useState(null)
    const [loadingRecipes, setLoadingRecipes] = useState(true)

    async function fetchRecipes (){
        try{
            const response = await fetch(recipeApi)
            if(response.ok){
                const data = await response.json()
                
                setRecipes(data.recipes)
            } else {
                const dataError = await response.json()
                setErrorRecipes(`data not found ${dataError.msg}`)
            }
        } catch(error){
            setErrorRecipes(`Error fetching recipes info: ${error.message}`)
        }finally{
            setLoadingRecipes(false)
        }
    }

    useEffect(()=>{ 
        fetchRecipes()
    },[])

  return {recipes, errorRecipes, loadingRecipes}
}

export default useFetchRecipes

