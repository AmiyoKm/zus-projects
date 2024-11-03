import {create } from 'zustand'
interface recipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string;
}
interface RecipeStore {
    recipes: recipe[]
    addRecipe : (recipe : recipe) => void
    removeRecipe : (id : number) => void
}
const useStore = create<RecipeStore>((set)=>({
    recipes: [],
    addRecipe : (recipe) => set((state)=> ({recipes:[...state.recipes , recipe] })),
    removeRecipe : (id)=> set((state)=> ({recipes : state.recipes.filter((recipe)=> recipe.id !==id)}))
}))
export default useStore