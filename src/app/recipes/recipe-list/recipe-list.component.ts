import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
    'https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29.jpg'),
    new Recipe('Roast Potatoes', 'A tasty roast potatoe',
    'https://www.seriouseats.com/recipes/images/2015/10/20131026-new-potatoes-roasted-crispy-thanksgiving-edit.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(receipe: Recipe) {
    this.recipeWasSelected.emit(receipe);
  }

}
