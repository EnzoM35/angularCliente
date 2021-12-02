import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderClientsComponent } from './header-clients/header-clients.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { MainTravelComponent } from './main-travel/main-travel.component';
import { MainStatusComponent } from './main-status/main-status.component';
import { MainHistoryComponent } from './main-history/main-history.component';
import { FormRequestComponent } from './form-request/form-request.component';

import { LoginHomeComponent } from './login-home/login-home.component';
import { TableStatusComponent } from './table-status/table-status.component';
import { FooterComponent } from './footer/footer.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogRequestComponent } from './dialog-request/dialog-request.component';
import { HeaderComponent } from './header/header.component';
import { TableHistoryComponent } from './table-history/table-history.component';

@NgModule({
  declarations: [
    HeaderClientsComponent,
    MainHomeComponent,
    MainTravelComponent,
    MainStatusComponent,
    MainHistoryComponent,
    FormRequestComponent,
    LoginHomeComponent,
    TableStatusComponent,
    FooterComponent,
    DialogComponent,
    DialogRequestComponent,
    HeaderComponent,
    TableHistoryComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule, ReactiveFormsModule],
  exports: [
    HeaderClientsComponent,
    MainHomeComponent,
    MainTravelComponent,
    MainStatusComponent,
    MainHistoryComponent,
    FormRequestComponent,
    LoginHomeComponent,
    TableStatusComponent,
    FooterComponent,
    HeaderComponent,
    TableHistoryComponent,
  ],
})
export class ComponentsModule {}
