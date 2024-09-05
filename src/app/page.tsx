'use client';

import { RootState } from "@/lib/store";
import { Card, CardHeader, CardMedia, Container, Grid2, Typography } from "@mui/material";
import Link from "next/link";
import { useSelector } from 'react-redux'
import { Recommendation } from "./Recommendation";

export default function Home({ searchParams }: { searchParams: { q: string }}) {
  const allRecipes = useSelector((state: RootState) => state.all);
  let filteredRecipes = allRecipes;
  const q = searchParams.q;
  if (q) {
    filteredRecipes = allRecipes.filter((recipe) => recipe.strMeal.match(RegExp(q, 'gi')) || recipe.strCategory.match(RegExp(q, 'gi')));
  }
  
  return (
    <Container sx={{ paddingY: 2 }}>
      <Recommendation />
      <Typography variant="h2">
        All recipes
      </Typography>
      <Grid2 container spacing={2}>
        {
          filteredRecipes.map((recipe) => (
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
    </Container>
  );
}
