import img from '../assets/Home.png'
import { SearchIcon } from 'lucide-react'
import { useContext } from 'react'
import RecipeItem from '../components/RecipeItem'
import { GlobalContext } from '../Context'

const Home = () => {

  const {searchParam, setSearchParam,handleSubmit} = useContext(GlobalContext);
  const {recipeList, loading} = useContext(GlobalContext);
  
  if(loading) return <div>Loading...Please wait!!</div>
  return (
    <div className='py-10 container mx-auto flex flex-wrap justify-center gap-10'>
      <form onSubmit={handleSubmit} className='  md:hidden w-[90vw] border bg-white rounded-lg flex items-center px-2 py-1 '>

      <SearchIcon className= 'stroke-gray-400 ' />
      <input
       type="text"
       name="search"
       value={searchParam}
       onChange={(event) => setSearchParam(event.target.value)}
       placeholder="Search Item to get recipe"
       className='outline-none p-2 w-[90vw] rounded-lg' 
     />
      </form>
      {recipeList && recipeList.length > 0 ? 
      recipeList.map((item)=> <RecipeItem item={item} />)
      : <div className='flex flex-col items-center gap-5'>
        <img src={img} alt="" className='relative  w-[90vw] h-[40vh] md:h-[60vh] rounded-lg  ' />
        <div>
         
        </div>
      </div> }
    </div>
  )
}

export default Home
