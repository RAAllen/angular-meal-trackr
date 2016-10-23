import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-table',
  template: `
  <table id="viewMeals" class="table-responsive table-bordered table-hover">
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all">Show All Meals</option>
    <option value="lowCalorie">Show Low Calorie Meals</option>
    <option value="highCalorie" selected="selected">Show High Calorie Meals</option>
  </select>
    <thead>
      <th>Meal</th>
      <th>Edit</th>
      <th>Description</th>
      <th>Calories</th>
    </thead>
    <tbody>
      <div *ngFor="let currentMeal of childMealTable | calories:selectedCalories">
        <tr>
          <td>{{ meal.name }}</td>
          <td><button (click)="editButtonClicked(currentMeal)" class="btn">Edit</button></td>
          <td>{{ meal.description }}</td>
          <td>{{ meal.calories }}</td>
        </tr>
      </div>
    </tbody>
  </table>
  `
})

export class MealTableComponent {
  public selectedCalories: string = "all";
  @Input() childMealTable: Meal[];
  @Output() clickSender = new EventEmitter();
  onChange(optionFromMenu) {
    this.selectedCalories = optionFromMenu;
    console.log(this.selectedCalories);
  }
  editButtonClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
