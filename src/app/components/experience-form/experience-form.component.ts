import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeeklyLog } from '../../interfaces/WeeklyLog';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrl: './experience-form.component.css'
})
export class ExperienceFormComponent {

  @Input()
  experience: WeeklyLog = {} as WeeklyLog;

  @Output()
  saveEmitter = new EventEmitter();

  formGroupExperience: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroupExperience = this.formBuilder.group({
      id: {value:null, disabled:true},
      rating: ['', ],
      weight: ['', ],
      endDate: ['', ],
      description: ['', ],
      diet: ['', ]
    })
  }

  save() {
    if (this.formGroupExperience.valid) {
      Object.assign(this.experience, this.formGroupExperience.value);
      this.saveEmitter.emit(true);
    }
  }
}
