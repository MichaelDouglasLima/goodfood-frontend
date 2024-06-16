import { Component, OnInit } from '@angular/core';
import { Food } from '../../interfaces/Food';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FoodService } from '../../services/food.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../interfaces/Category';
import { AuthService } from '../../services/auth.service';
import { Client } from '../../interfaces/Client';

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrl: './pantry.component.css'
})
export class PantryComponent implements OnInit {

  categories: Category[] = [];

  foods: Food[] = [];

  food: Food = {} as Food;

  deleteFood: Food = {} as Food;

  isEditing: boolean = false;

  constructor(
    private foodService: FoodService,
    private categoryService: CategoryService,
    private authService: AuthService,
    private modalService: NgbModal) {

  }

  ngOnInit(): void {
    this.loadCategories();
    this.loadFoods();
  }

  showToken() {
    let myToken = this.authService.getToken();
    console.log(myToken);
  }

  saveFood(save: boolean) {
    if (save) {
      if (this.isEditing) {
        this.foodService.update(this.food).subscribe();
      }
      else {
        this.foodService.save(this.food).subscribe({
          next: data => {
            this.foods.push(data);
          }
        });
      }
    }

    this.food = {} as Food;
    this.isEditing = false;
  }

  loadFoods() {
    this.foodService.getFoods().subscribe(
      {
        next: data => { this.foods = data }
      }
    );
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(
      {
        next: data => { this.categories = data }
      }
    );
  }

  edit(food: Food) {
    this.food = food;
    this.isEditing = true;
  }

  delete(modal: any, food: Food) {
    this.deleteFood = food;
    this.modalService.open(modal).result.then(
      (confirm) => {
        if (confirm) {
          this.foodService.delete(food).subscribe({
            next: () => {
              this.foods = this.foods.filter(f => f.id !== food.id);
            }
          });
        }
      }
    );
  }

}
