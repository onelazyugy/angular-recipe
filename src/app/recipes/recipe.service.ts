import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29.jpg',
            [
                new Ingredient('Potatoe', 3),
                new Ingredient('Soft brown potatoe', 2)
            ]
        ),
        new Recipe(
            'Roast Potatoes',
            'A tasty roast potatoe',
            'https://www.seriouseats.com/recipes/images/2015/10/20131026-new-potatoes-roasted-crispy-thanksgiving-edit.jpg',
            [
                new Ingredient('Yellow potatoe', 1),
                new Ingredient('Brown potatoe', 4)
            ]
        )
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        // deep copy, not modify the recipes array above
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
