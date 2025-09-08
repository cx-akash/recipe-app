import React from "react";
import { Recipe } from "@/types/recipe";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        {recipe.name}
      </h2>
      <h3 className="mt-4 font-medium text-gray-700 dark:text-gray-300">
        Ingredients:
      </h3>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3 className="mt-4 font-medium text-gray-700 dark:text-gray-300">
        Instructions:
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{recipe.instructions}</p>
    </div>
  );
}
