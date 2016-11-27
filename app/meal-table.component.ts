import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-table',
  template: `
<div class="table-responsive">
  <table id="viewMeals" class="table-bordered table-hover">
    <thead>
      <th>Meal
        <select (change)="onChange($event.target.value)" class="filter">
          <option value="all" selected="selected">All Meals</option>
          <option value="lowCalorie">Low Calorie Meals</option>
          <option value="highCalorie"> High Calorie Meals</option>
        </select>
      </th>
      <th>Edit</th>
      <th>Description</th>
      <th>Calories</th>
    </thead>
    <tbody>
      <tr *ngFor="let currentMeal of childMealTable | calories:selectedCalories">
        <td>{{ currentMeal.name }}</td>
        <td><button (click)="editButtonClicked(currentMeal)" class="btn">Edit</button></td>
        <td>{{ currentMeal.description }}</td>
        <td>{{ currentMeal.calories }}</td>
      </tr>
    </tbody>
  </table>
</div>
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
  selectedMeal: Meal = null;
  finishedEditing() {
    this.selectedMeal = null;
  }
}
