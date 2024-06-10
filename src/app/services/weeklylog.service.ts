import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeeklyLog } from '../interfaces/WeeklyLog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeeklylogService {

  private apiUrl = 'http://localhost:8080/api/weeklylogs';

  constructor(private http: HttpClient) { }

  save(weeklyLog: WeeklyLog) {
    return this.http.post<WeeklyLog>(this.apiUrl, weeklyLog);
  }

  getAllByDiet(dietId: number): Observable<WeeklyLog[]> {
    return this.http.get<WeeklyLog[]>(`${this.apiUrl}?dietId=${dietId}`);
  }
  
}
