import { CourseService } from './_services/course.service';
import { DropdownDirective } from './_directives/dropdown.directive';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { ResourceComponent } from './resource/resource.component';
import { MaterialComponent } from './material/material.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CourseComponent,
    DropdownDirective,
    ResourceComponent,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [UserService, CourseService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
