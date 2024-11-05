import  { useEffect } from 'react'
import { useMealStore } from '../store/useMealStore'

const Meal = () => {
 const {meals ,searchQuery , setMeals , setSearchQuery}  = useMealStore()
 const fetchMeals = async () => {
    try {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        const data = await res.json()
        console.log(data.meals)
        if(!data){
            return
        }
        setMeals(data.meals)
    } catch (error) {
        console.log(error)
    }
}
    useEffect(()=>{
        
            fetchMeals()
        }
    ,[setMeals])
    const filteredMeals = meals.filter((meal)=>
        
        meal.strMeal.toLocaleLowerCase().includes(searchQuery.toLowerCase())
    
    )
  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100'>
    <h1 className='text-4xl font-bold mb-8 text-teal-500'>Seafood Recipes</h1>
    <input
      type="text"
      placeholder="Search for a meal..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className='border border-teal-400 rounded-lg p-3 mb-8 w-96 text-center focus:outline-none focus:ring-2 focus:ring-teal-500'
    />
    <div>
      {filteredMeals.length > 0 ? (
        filteredMeals.map((meal) => (
          <div key={meal.idMeal}>
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
        ))
      ) : (
        <p>No meals found</p>
      )}
    </div>
  </div>
  )
}

export default Meal