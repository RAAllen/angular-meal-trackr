import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-trackr',
  template: `
  <div class="container">
    <h1>Meal Trackr</h1>
    <div id="mealTable">
      <meal-table
        [childMealTable]="masterMealList"
        (clickSender)="editClicked($event)"
      ></meal-table>
    </div>
    <edit-meal
      [childSelectedMeal]="selectedMeal"
      (updateClickedSender)="finishedEditing()"
    ></edit-meal>
    <div id="mealForm">
      <meal-form
        (newMealSender)="addClicked($event)"
      ></meal-form>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Veggie Burger", "A garden burger on a brioche bun, with cheddar cheese, Dino BBQ Sauce and avocado slices.", 495),
    new Meal("Dot Pasta", "Sardinian Fregola with baby sweet peas, butter and Parmesan cheese", 455),
    new Meal("Pizza", "Two slices of pizza from Ill Illiano's.", 570),
    new Meal("Hummus", "Zatar topped homemade hummus served with pitas, carrots and kalamata olives.", 425),
    new Meal("Soup and Popovers", "Campbell's tomato soup with hot pepper flakes, garlic powder and bouquet garni add for flavor, served with fresh Gruyere and cracked black pepper popovers.", 375),
    new Meal("Baked Potatoes", "Two baked potatoes served with cheddar cheese, broccoli, facon and sour cream.", 595),
    new Meal("Pasta with Tomato Sauce", "Rigatoni with homemade tomato sauce with kalamata olives, capers and Parmesan cheese.", 405)
  ];
  selectedMeal: Meal = null;
  editClicked(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
  addClicked(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
