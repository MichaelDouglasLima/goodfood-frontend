import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeeklyLog } from '../../interfaces/WeeklyLog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weeklylog-form',
  templateUrl: './weeklylog-form.component.html',
  styleUrl: './weeklylog-form.component.css'
})
export class WeeklylogFormComponent {

  @Input()
  weeklyLog: WeeklyLog = {} as WeeklyLog;

  @Output()
  saveEmitter =  new EventEmitter();

  formGroupWeeklyLog: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroupWeeklyLog = this.formBuilder.group({
      id: {value:null, disabled:true},
      rating: ['', ],
      weight: ['', ],
      endDate: ['', ],
      description: ['', ],
      diet: ['', ]
    })
  }

  save() {
    if (this.formGroupWeeklyLog.valid) {
      Object.assign(this.weeklyLog, this.formGroupWeeklyLog.value);
      this.saveEmitter.emit();
    }
  }

}
