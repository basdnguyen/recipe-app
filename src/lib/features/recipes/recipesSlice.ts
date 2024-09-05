import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import allRecipes from './recipes';

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strCategory: string;
}

// Define a type for the slice state
interface RecipesState {
  all: Recipe[];
  favorite: string[]
}

// Define the initial state using that type
const initialState: RecipesState = {
  all: allRecipes,
  favorite: []
}

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<string>) => {
      state.favorite = [...state.favorite, action.payload];
    },
    removeFromFavorite: (state, action: PayloadAction<string>) => {
      state.favorite = state.favorite.filter((favRecipe) => favRecipe !== action.payload)
    }
  },
})

export const { addToFavorite, removeFromFavorite } = recipesSlice.actions

export default recipesSlice.reducer