import { Component } from '@angular/core';
import { WeeklyLog } from '../../interfaces/WeeklyLog';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  experiences: WeeklyLog[] = [];

  experience: WeeklyLog = {} as WeeklyLog;

}
