import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // come from template #nameInput
  @ViewChild('nameInput') nameInputRef: ElementRef;
  // come from template #amountInput
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const newIngrident = new Ingredient(ingredientName, ingredientAmount);
    this.shoppingListService.addIngredient(newIngrident);
  }
}
