import { Heart, Home, Search } from 'lucide-react';
import { Link } from 'react-router-dom'


const NavBar = () => {

  
  return (
    <div className='flex justify-between items-center py-5 px-8 md:px-20 shadow md:shadow-none items-center'>
      <div>
        <h1 className='text-2xl font-bold'>The<span className='text-green-400'>Kitchen</span></h1>
      </div>
       <form  className='hidden md:flex md:w-[25vw] ms-28 border bg-white rounded-lg flex items-center px-2 py-1 '>
        
         <Search className='stroke-gray-400 sm:hidden lg:block'/>
        <input
          type="text"
          name="search"
          placeholder=" Enter Items..."
          className='outline-none p-2 w-[20vw] rounded-lg' 
        />
        
      </form>
      <div className='flex gap-5 md:gap-16 '>

        <Link to={'/'} className='font-semibold hover:text-green-400 flex gap-1 items-center'> <Home size={20}/> Home</Link>
        <Link to={'/favourites '} className='font-semibold hover:text-green-400 flex gap-1 items-center '> <Heart size={20}/>  Favourites</Link>
      </div>
    </div>
  )
}


export default NavBar;
