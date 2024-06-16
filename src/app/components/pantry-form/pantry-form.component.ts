import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Food } from '../../interfaces/Food';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from '../../interfaces/Category';

@Component({
  selector: 'app-pantry-form',
  templateUrl: './pantry-form.component.html',
  styleUrl: './pantry-form.component.css'
})
export class PantryFormComponent {

  @Input()
  categories: Category[] = [];

  @Input()
  food: Food = {} as Food;

  @Output()
  saveEmitter = new EventEmitter();

  formGroupFood: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroupFood = this.formBuilder.group({
      id: {value:null, disabled:true},
      description: [''],
      calories: [''],
      category: ['']
    })
  }

  ngOnChanges(): void {
    if (this.food.id) {
      this.formGroupFood.setValue(this.food);
    }
  }

  save() {
    if (this.formGroupFood.valid) {
      Object.assign(this.food, this.formGroupFood.value);
      this.saveEmitter.emit(true);
    }
  }

  cancel() {
    this.saveEmitter.emit(false);
  }

  get ffgDescription() { return this.formGroupFood.get("description") }

  get ffgCalories() { return this.formGroupFood.get("calories") }

  get ffgCategory() { return this.formGroupFood.get("category") }

}
