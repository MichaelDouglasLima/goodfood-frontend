import { Component } from '@angular/core';
import { WeeklyLog } from '../../interfaces/WeeklyLog';
import { WeeklylogService } from '../../services/weeklylog.service';
import { Diet } from '../../interfaces/Diet';

@Component({
  selector: 'app-weeklylogs',
  templateUrl: './weeklylogs.component.html',
  styleUrl: './weeklylogs.component.css'
})
export class WeeklylogsComponent {

  weeklyLog: WeeklyLog = {} as WeeklyLog;

  weeklyLogs: WeeklyLog[] = [];

  constructor (private weeklyLogService: WeeklylogService) {}

  ngOnInit(): void {
    // Exemplos de logs Semanais
    this.weeklyLogs = [
      {
        id: 1,
        rating: 10,
        weight: 70,
        endDate: '2024-05-18',
        description: 'Exagerei na paçoquinha, mas deu tudo certo.',
        diet: { /* Diet details */ } as Diet
      },
      {
        id: 2,
        rating: 9,
        weight: 71,
        endDate: '2024-05-11',
        description: 'Exagerei no amendoim, ainda bem que não sou alérgico.',
        diet: { /* Diet details */ } as Diet
      }
    ];
  }

  saveWeeklyLog(): void {
    this.weeklyLogService.save(this.weeklyLog).subscribe({
      next: (data) => {
        this.weeklyLogs.push(data);
        this.weeklyLog = {} as WeeklyLog;
      },
      error: (err) => {
        console.error('Erro ao salvar o log semanal:', err);
      }
    });
  }

}
