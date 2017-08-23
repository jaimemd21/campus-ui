import { CountryService } from './_services/country.service';
import { PersonService } from './_services/person.service';
import { SafePipe } from './_pipes/safe.pipe';
import { MaterialService } from './_services/material.service';
import { CourseService } from './_services/course.service';
import { DropdownDirective } from './_directives/dropdown.directive';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { MaterialComponent } from './material/material.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConfigComponent } from './config/config.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CourseComponent,
    DropdownDirective,
    MaterialComponent,
    SafePipe,
    HeaderComponent,
    FooterComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [UserService, CourseService, MaterialService, PersonService, CountryService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
