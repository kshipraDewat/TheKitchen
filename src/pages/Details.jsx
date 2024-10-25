import { StarOff } from 'lucide-react';
import { Star } from 'lucide-react';
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Favourites from './Favourites';
import { GlobalContext } from '../Context';

const Details = () => {
  const {id} = useParams();
  const {recipeDetailsData, setRecipeDetailsData,handleAddToFav, favouritesList} = useContext(GlobalContext)
  console.log(id);
  useEffect(()=>{
    async function getRecipeDetails() {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
      const data = await response.json();

      console.log(data)
      if(data?.data){
        setRecipeDetailsData(data?.data);
      }
    }

    getRecipeDetails();
  },[])
  return (

    <div className=' mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-10 h-[85.5vh] '>
      <div className=' flex flex-col items-center md:items-start p-10 gap-5'>
      <h3 className=' text-2xl truncate  font-bold'>Recipe : {recipeDetailsData?.recipe?.title}</h3>
        <div className=' h-[50vh]  overflow-hidden rounded group flex items-center justify-center  '>
          <img src={recipeDetailsData?.recipe?.image_url} alt="" className='object-cover w-full h-full block group-hover:scale-110 duration-300' />
          
        </div>

      </div>
      <div className='flex flex-col gap-1 px-10'>
        <div className='flex justify-between sm:px-28 lg:px-0 lg:pe-10 items-center md:pt-7'> 
          <span className='font-thin text-sm text-gray-500'>{recipeDetailsData?.recipe?.publisher}</span>

          <button onClick={()=> handleAddToFav(recipeDetailsData?.recipe)} className='flex items-center gap-1 bg-green-400 text-white font-bold p-2 rounded text-sm'>
            {
              favouritesList && favouritesList.length >0 && favouritesList.findIndex(item => item.id === recipeDetailsData?.recipe.id) !== -1 ? `Remove from favorites `: `Add to favorites`
            }

          </button>
        </div>
          <div className='flex flex-col gap-10 py-5 items-center lg:items-start'>
            <ul className='flex flex-col gap-3 items-center lg:items-start'>
            <span className='text-xl font-semibold'>Ingredients</span>
              {
                recipeDetailsData?.recipe?.ingredients.map((ingredient) => 
                  <li className=''>
                  <span>{ingredient.quantity} {ingredient.unit}</span>
                  <span>{ingredient.description}</span>
                </li> )
              }
            </ul>
          </div>
      </div>
      
    </div>
  )
}

export default Details
