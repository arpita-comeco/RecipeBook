import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]= [
    new Ingredient('bread',3),
    new Ingredient('cheese',4),
    new Ingredient('sauce',1),

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
