'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Card, CardHeader, CardMedia, Grid2 } from '@mui/material';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

export function Recommendation() {
  const allRecipes = useSelector((state: RootState) => state.all);
  const favoriteRecipeIds = useSelector((state: RootState) => state.favorite);

  if (favoriteRecipeIds.length === 0) return null;

  const countByCategory = new Map();
  favoriteRecipeIds.forEach((id) => {
    const recipe = allRecipes.find(recipe => recipe.idMeal === id);
    if (countByCategory.has(recipe?.strCategory)) {
      countByCategory.set(recipe?.strCategory, countByCategory.get(recipe?.strCategory) + 1);
    } else {
      countByCategory.set(recipe?.strCategory, 1);
    }
  });
  let mostCount = 0;
  let mostCategory = '';
  countByCategory.forEach((count, category) => {
    if (count > mostCount) {
      mostCount = count;
      mostCategory = category;
    }
  });
  const recommended = allRecipes.filter((recipe) => recipe.strCategory == mostCategory).slice(0, 3);

  return (
    <>
      <Typography variant="h2">
        Recommended for you
      </Typography>
      <Grid2 container spacing={2}>
        {
          recommended.map((recipe) => (
            <Link href={`/recipe/${recipe.idMeal}`} key={recipe.idMeal}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  title={recipe.strMeal}
                  subheader={recipe.strCategory}
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
    </>
  );
}
