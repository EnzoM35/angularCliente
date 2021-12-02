import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { RequestTravelComponent } from './request-travel/request-travel.component';
import { StatusTravelComponent } from './status-travel/status-travel.component';
import { HistoryComponent } from './history/history.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    HomeComponent,
    RequestTravelComponent,
    StatusTravelComponent,
    HistoryComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    HomeComponent,
    RequestTravelComponent,
    StatusTravelComponent,
    HistoryComponent,
    ReactiveFormsModule,
  ],
})
export class PagesModule {}
