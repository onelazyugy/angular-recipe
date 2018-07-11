import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test',
        'https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29.jpg'),
        new Recipe('Roast Potatoes', 'A tasty roast potatoe',
        'https://www.seriouseats.com/recipes/images/2015/10/20131026-new-potatoes-roasted-crispy-thanksgiving-edit.jpg')
    ];

    getRecipes() {
        // deep copy, not modify the recipes array above
        return this.recipes.slice();
    }
}
