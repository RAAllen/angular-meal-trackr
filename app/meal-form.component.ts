import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-form',
  template: `
  <h3>Add a new meal to the trackr:</h3>
  <form id="newMeal">
    <div class="form-group">
      <label for="mealName">Enter your meal:</label>
      <input #newName id="mealName" type="text" class="form-control" placeholder="Fried Artichokes">
    </div>
    <div class="form-group">
      <label for="mealDescription">Add a description of the meal:</label>
      <input #newDescription id="mealDescription" type="text" class="form-control" placeholder="7 fried baby artichokes served with a side of parsley-lemon sauce.">
    </div>
    <div class="form-group">
      <label for="mealCalories">Add a calorie count to your meal:</label>
      <input #newCalories id="mealCalories" type="number" class="form-control" placeholder="575">
    </div>
    <button (click)="addClicked(newName.value, newDescription.value, newCalories.value);
      newName.value='';
      newDescription.value='';
      newCalories.value='';
    ">Add</button>
  </form>
  `
})

export class MealFormComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, description: string, calories: number) {
    var newMeal: Meal = new Meal(name, description, calories);
    this.newMealSender.emit(newMeal);
  }
}
