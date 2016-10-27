import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { MealFormComponent } from './meal-form.component';
import { MealTableComponent } from './meal-table.component';
import { TableRowComponent } from './table-row.component';
import { EditMealComponent } from './edit-meal.component';
import { CaloriesPipe } from './calories.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MealFormComponent,
    MealTableComponent,
    TableRowComponent,
    EditMealComponent,
    CaloriesPipe
  ],
  bootstrap:
  [ AppComponent ]
})

export class AppModule { }
