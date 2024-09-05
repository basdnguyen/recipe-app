'use client';

import { RootState } from "@/lib/store";
import { Card, CardHeader, CardMedia, Container, Grid2 } from "@mui/material";
import Link from "next/link";
import { useSelector } from 'react-redux'

export default function FavoritePage() {
  const allRecipes = useSelector((state: RootState) => state.all);
  const favoriteRecipeIds = useSelector((state: RootState) => state.favorite);
  const favoriteRecipes = allRecipes.filter((recipe) => favoriteRecipeIds.includes(recipe.idMeal));
  return (
    <Container sx={{ paddingY: 2 }}>
      <Grid2 container spacing={2}>
        {
          favoriteRecipes.map((recipe) => (
            <Link href={`/recipe/${recipe.idMeal}`} key={recipe.idMeal}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  title={recipe.strMeal}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={recipe.strMealThumb}
                  alt="Paella dish"
                />
              </Card></Link>))
        }
      </Grid2>
    </Container>
  );
}
