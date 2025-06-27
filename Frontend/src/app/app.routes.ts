import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CompanyDashboardComponent } from './pages/dashboard/company/company.component';
import { UserDashboardComponent } from './pages/dashboard/user/user.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    children: [
      { path: '', component: CompanyDashboardComponent }, // default to company for demo
      { path: 'user', component: UserDashboardComponent },
    ],
  },
];
