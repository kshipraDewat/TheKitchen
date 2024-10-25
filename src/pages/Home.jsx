
import { SearchIcon } from 'lucide-react'
import img from '../assets/Home.png'


const Home = () => {
  return (
    <div className='py-10 container mx-auto flex flex-wrap justify-center gap-10'>
      <form  className='  md:hidden w-[60vw] border bg-white rounded-lg flex items-center px-2 py-1 '>

      <SearchIcon className= 'stroke-gray-400 ' />
      <input
       type="text"
       name="search"
       placeholder="Search Item to get recipe"
       className='outline-none p-2 w-[50vw] rounded-lg' 
     />
      </form>
         <div className=''>
        <img src={img} alt="" className='relative  w-[90vw] h-[40vh] rounded-lg  ' />
        <div>
         
        </div>
      </div> 
    </div>
  )
}

export default Home
