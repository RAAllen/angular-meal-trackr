import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf="childSelectedMeal">
    <h3>Edit your meal:</h3>
    <form id="editMeal">
      <div class="form-group">
        <label for="newName">Enter your editted name:</label>
        <input #editedName id="newName" type="text" class="form-control" placeholder="Steamed Artichokes">
      </div>
      <div class="form-group">
        <label for="newDescription">Add a description of the meal:</label>
        <input #editedDescription id="newDescription" type="text" class="form-control" placeholder="2 large steamed artichokes served with drawn butter.">
      </div>
      <div class="form-group">
        <label for="newCalories">Add a calorie count to your meal:</label>
        <input #editedCalories id="newCalories" type="number" class="form-control" placeholder="425">
      </div>
      <button (click)="addClicked();">Add</button>
    </form>
  </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() addEditSender = new EventEmitter();
  editClicked() {
    this.addEditSender.emit();
  }
}
