import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-table',
  template: `
  <table id="viewMeals" class="table-responsive table-bordered table-hover">
    <thead>
      <th>Meal</th>
      <th>Description</th>
      <th>Calories</th>
    </thead>
    <tbody>
    </tbody>
  </table>
  `
})

export class MealTableComponent {

}
