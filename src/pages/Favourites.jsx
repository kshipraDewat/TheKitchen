
import React, { useContext } from 'react'
import { GlobalContext } from '../Context';
import RecipeItem from '../components/RecipeItem';

const Favourites = () => {
  
  
  const {favouritesList} = useContext(GlobalContext);
  
  return (
    <div className='py-10 container mx-auto flex flex-wrap justify-center gap-10'>
      
      {favouritesList && favouritesList.length > 0 ? (
        favouritesList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added in favorites.
          </p>
        </div>
      )}
    </div>
  )
}

export default Favourites
