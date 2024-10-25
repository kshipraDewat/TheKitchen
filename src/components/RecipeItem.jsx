import React, { useContext } from 'react'
import { CookingPot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Context';


const RecipeItem = ({item}) => {
  const {searchParam} = useContext(GlobalContext);
  return (
    
    
    <div>     
   
    <div className='flex flex-col w-[70vw] sm:w-[40vw] md:w-[25vw] overflow-hidden p-5 bg-white shadow-xl gap-5 border-2 border-white/75 rounded'>
      <div className='md:h-[10vw] flex justify-center   overflow-hidden items-center rounded'>
        <img src={item?.image_url} alt="recipe item" className='block w-full' />
      </div>
      <div>
        <span className='font-thin text-sm  text-gray-500'>{item?.publisher}</span>
        <div className='flex justify-between items-center'>
        <h3 className=' font-bold'>{item?.title}</h3>
        <Link to={`/recipe-item/${item?.id}`} className='flex items-center gap-1 bg-green-400 text-white font-bold p-2 rounded text-sm'><CookingPot size={15}/>Recipe</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default RecipeItem
