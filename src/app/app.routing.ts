import { ConfigComponent } from './config/config.component';
import { MaterialComponent } from './material/material.component';
import { CourseComponent } from './course/course.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },    
    { path: 'courses', component: CourseComponent, canActivate: [AuthGuard] },
    { path: 'config', component: ConfigComponent, canActivate: [AuthGuard] },
    { path: 'materials/:idEdition', component: MaterialComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);