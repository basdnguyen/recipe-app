'use client';

import { Card, CardContent, CardHeader, CardMedia, Container, IconButton, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { addToFavorite, removeFromFavorite } from "@/lib/features/recipes/recipesSlice";

export default function RecipeDetailPage({ params }: { params: { id: string } }) {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state: RootState) => state.all);
  const recipe = allRecipes.find(recipe => recipe.idMeal === params.id);
  if (!recipe) {
    return 'Not found';
  }

  const favoriteRecipeIds = useSelector((state: RootState) => state.favorite);
  const isCurrentRecipeFavorite = favoriteRecipeIds.some((favId) => recipe.idMeal === favId);

  const addRecipeToFavorite = () => {
    dispatch(addToFavorite(recipe.idMeal))
  }

  const removeRecipeFromFavorite = () => {
    dispatch(removeFromFavorite(recipe.idMeal))
  }

  return (
    <Container sx={{ paddingY: 2 }}>
      <Card key={recipe.idMeal}>
        <CardHeader
          title={recipe.strMeal}
          action={isCurrentRecipeFavorite ?
            <IconButton aria-label="settings" onClick={removeRecipeFromFavorite}>
              <FavoriteIcon color='success' />
            </IconButton>
            :
            <IconButton aria-label="settings" onClick={addRecipeToFavorite}>
              <FavoriteIcon />
            </IconButton>
          }
        />
        <CardMedia
          component="img"
          height="194"
          image={recipe.strMealThumb}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {recipe.strInstructions}
          </Typography>
        </CardContent>
      </Card>
    </Container>)
}
