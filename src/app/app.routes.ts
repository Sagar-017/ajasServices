import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { OurServiceComponent } from './pages/our-service/our-service.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { UserEditComponent } from './pages/admin-dashboard/user-edit/user-edit.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'ourService', component: OurServiceComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contactus', component: ContactUsComponent},
    {path: 'signin', component: SignInComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'admindashboard', component: AdminDashboardComponent},
    {path: 'useredit/:idU', component: UserEditComponent}
];
