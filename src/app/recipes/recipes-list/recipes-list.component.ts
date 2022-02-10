import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe('sandwich','great for breakfast','https://media.istockphoto.com/photos/italian-style-panini-picture-id1292147140'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
