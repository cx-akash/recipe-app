"use client";

import { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import RecipeForm from "../components/RecipeForm";
import { Recipe } from "../types/recipe";

const initialRecipes: Recipe[] = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Bacon"],
    instructions: "Cook pasta, mix with eggs and cheese, add crispy bacon.",
  },
  {
    id: 2,
    name: "Avocado Toast",
    ingredients: ["Bread", "Avocado", "Salt", "Lemon"],
    instructions: "Toast bread, mash avocado, season with salt and lemon.",
  },
];

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddRecipe = (newRecipe: Recipe) => {
    setRecipes((prev) => [...prev, newRecipe]);
  };

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
         Recipe Manager
      </h1>

      <RecipeForm onAddRecipe={handleAddRecipe} />
      <SearchBar onSearch={setSearchQuery} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}
