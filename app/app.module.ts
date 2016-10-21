import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { MealFormComponent } from './meal-form.component';
import { MealTableComponent } from './meal-table.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MealFormComponent,
    MealTableComponent
  ],
  bootstrap:
  [ AppComponent ]
})

export class AppModule { }
