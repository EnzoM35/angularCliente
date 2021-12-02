import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import { RequestTravelComponent } from './pages/request-travel/request-travel.component';
import { StatusTravelComponent } from './pages/status-travel/status-travel.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardGuard } from './model/guard/auth-guard.guard';
import { AuthLoginOKGuard } from './model/guardLogOK/auth-login-ok.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuardGuard],
    component: HomeComponent,
  },
  {
    path: 'requestTravel',
    canActivate: [AuthGuardGuard],
    component: RequestTravelComponent,
  },
  {
    path: 'statusTravel',
    canActivate: [AuthGuardGuard],
    component: StatusTravelComponent,
  },
  {
    path: 'history',
    canActivate: [AuthGuardGuard],
    component: HistoryComponent,
  },
  {
    path: 'login',
    canActivate: [AuthLoginOKGuard],
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
