import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
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
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
