import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantryComponent } from './components/pantry/pantry.component';
import { LoginComponent } from './components/login/login.component';
import { HomeClientComponent } from './components/home-client/home-client.component';
import { HomeNutritionistComponent } from './components/home-nutritionist/home-nutritionist.component';

import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { RegisterComponent } from './components/register/register.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProfileClientComponent } from './components/profile-client/profile-client.component';
import { HistoryComponent } from './components/history/history.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home-client', component: HomeClientComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'CLIENT' } },
  { path: 'home-nutritionist', component: HomeNutritionistComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'NUTRITIONIST' } },
  { path: 'pantry', component: PantryComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'profile-client', component: ProfileClientComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
