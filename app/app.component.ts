import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-trackr',
  template: `
  <div class="container">
    <div class="row">
      <div id="mealForm" class="col-xs-6">
        <meal-form
        ></meal-form>
      </div>
      <div id="mealTable" class="col-xs-6">
      </div>
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
    new Meal("Baked Potatoes", "", ),
    new Meal("", "", )
  ]

}
