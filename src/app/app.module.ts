import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarClientComponent } from './components/navbar-client/navbar-client.component';
import { PantryComponent } from './components/pantry/pantry.component';
import { PantryFormComponent } from './components/pantry-form/pantry-form.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarNutritionistComponent } from './components/navbar-nutritionist/navbar-nutritionist.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeClientComponent } from './components/home-client/home-client.component';
import { HomeNutritionistComponent } from './components/home-nutritionist/home-nutritionist.component';
import { RegisterComponent } from './components/register/register.component';
import { ExperienceFormComponent } from './components/experience-form/experience-form.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProfileClientComponent } from './components/profile-client/profile-client.component';
import { HistoryFormComponent } from './components/history-form/history-form.component';
import { HistoryComponent } from './components/history/history.component';
import { ProfileNutritionistComponent } from './components/profile-nutritionist/profile-nutritionist.component';
import { WeeklylogFormComponent } from './components/weeklylog-form/weeklylog-form.component';
import { WeeklylogsComponent } from './components/weeklylogs/weeklylogs.component';
import { WeeklylogCardComponent } from './components/weeklylog-card/weeklylog-card.component';

export function tokenGetter() {
  return localStorage.getItem('authToken');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    NavbarClientComponent,
    PantryComponent,
    PantryFormComponent,
    HeaderComponent,
    NavbarNutritionistComponent,
    HomeClientComponent,
    HomeNutritionistComponent,
    RegisterComponent,
    ExperienceFormComponent,
    ExperienceComponent,
    ProfileClientComponent,
    HistoryFormComponent,
    HistoryComponent,
    ProfileNutritionistComponent,
    WeeklylogFormComponent,
    WeeklylogsComponent,
    WeeklylogCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:8080'],
        disallowedRoutes: ['localhost:8080/api/auth/login']
      }
    })
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
