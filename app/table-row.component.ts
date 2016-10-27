import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'table-row',
  template: `
  <td>{{ meal.name }}</td>
  <td><button (click)="editButtonClicked(currentMeal)" class="btn">Edit</button></td>
  <td>{{ meal.description }}</td>
  <td>{{ meal.calories }}</td>
  `
})

export class TableRowComponent {
  @Input() meal: Meal[];
}
