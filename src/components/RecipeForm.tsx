"use client";

import { useForm } from "react-hook-form";
import { Recipe } from "../types/recipe";

interface RecipeFormProps {
  onAddRecipe: (recipe: Recipe) => void;
}

type RecipeFormInput = {
  name: string;
  ingredients: string;  
  instructions: string;
};

export default function RecipeForm({ onAddRecipe }: RecipeFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RecipeFormInput>();

  const onSubmit = (data: RecipeFormInput) => {
    const newRecipe: Recipe = {
      id: Date.now(),
      name: data.name,
      instructions: data.instructions,
      ingredients: data.ingredients
        .split(",")
        .map((item: string) => item.trim()), 
    };

    onAddRecipe(newRecipe);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-6"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        ➕ Add a New Recipe
      </h2>

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-1">
          Recipe Name
        </label>
        <input
          {...register("name", { required: "Recipe name is required" })}
          className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
          placeholder="e.g. Chocolate Cake"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-1">
          Ingredients (comma separated)
        </label>
        <input
          {...register("ingredients", { required: "Ingredients are required" })}
          className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
          placeholder="Flour, Sugar, Eggs"
        />
        {errors.ingredients && (
          <p className="text-red-500 text-sm mt-1">
            {errors.ingredients.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-1">
          Instructions
        </label>
        <textarea
          {...register("instructions", {
            required: "Instructions are required",
          })}
          className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
          rows={4}
          placeholder="Step-by-step instructions"
        />
        {errors.instructions && (
          <p className="text-red-500 text-sm mt-1">
            {errors.instructions.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition"
      >
        Add Recipe
      </button>
    </form>
  );
}
