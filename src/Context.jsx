import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext(null);

export const ContextProvider = (props) => {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favouritesList, setFavouritesList] = useState(() => {
    // Load favourites from localStorage initially
    const savedFavourites = localStorage.getItem('favouritesList');
    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });

  useEffect(() => {
    // Save favourites to localStorage every time favouritesList changes
    localStorage.setItem('favouritesList', JSON.stringify(favouritesList));
  }, [favouritesList]);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      setSearchParam("");
    }
  }

  function handleAddToFav(getCurrentItem) {
    const updatedFavourites = [...favouritesList];
    const index = updatedFavourites.findIndex((item) => item.id === getCurrentItem.id);

    if (index === -1) {
      updatedFavourites.push(getCurrentItem);
    } else {
      updatedFavourites.splice(index, 1);
    }

    // Update both state and localStorage
    setFavouritesList(updatedFavourites);
    localStorage.setItem('favouritesList', JSON.stringify(updatedFavourites));
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        setSearchParam,
        handleSubmit,
        handleAddToFav,
        favouritesList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
