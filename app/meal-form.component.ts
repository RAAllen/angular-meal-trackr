import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-form',
  template: `
  <form id="newMeal">
    <div class="form-group">
      <label for="mealName">Enter your meal:</label>
      <input id="mealName" type="text" class="form-control" placeholder="Fried Artichokes">
    </div>
    <div class="form-group">
      <label for="mealDescription">Add a description of the meal:</label>
      <input id="mealDescription" type="text" class="form-control" placeholder="7 Deep fried artichokes served with a side of parsley and lemon sauce and 3 lemon wedges.">
    </div>
    <div class="form-group">
      <label for="mealCalories">Add a calorie count to your meal:</label>
      <input id="mealCalories" type="number" class="form-control" placeholder="575">
    </div>
  </form>
  `
})

export class MealFormComponent {


}
