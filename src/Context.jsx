import { createContext, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react";

export const GlobalContext = createContext(null);

export const ContextProvider =(props)=>{
    const [searchParam, setSearchParam] = useState("");
    const [loading, setLoading] = useState(false);
    const [recipeList , setRecipeList] = useState([]); 
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const [favouritesList, setFavouritesList] = useState([]);

    async function handleSubmit(event) {
      event.preventDefault();
      try{
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
        );
        const data = await res.json();
        if(data?.data?.recipes){
          setRecipeList(data?.data?.recipes)
          setLoading(false)
        }
      }
      catch(e){
        console.log(e)
        setLoading(false)
          setSearchParam('')
      }
    }

    function handleAddToFav(getCurrentItem){

    }

    return(
        <GlobalContext.Provider value={{ searchParam,loading, recipeList,recipeDetailsData, setRecipeDetailsData, setSearchParam,handleSubmit,handleAddToFav,favouritesList }}>
          {props.children}
        </GlobalContext.Provider>
    )

}


