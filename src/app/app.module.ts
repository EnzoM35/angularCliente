import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { PagesModule } from './pages/pages.module';
import { loginService } from './pages/services/loginService';
import { HttpClientModule } from '@angular/common/http';
import { requestService } from './pages/services/requestTravelService';
import { statusService } from './pages/services/statusService';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PagesModule,
    HttpClientModule,
  ],
  providers: [loginService, requestService, statusService],
  bootstrap: [AppComponent],
})
export class AppModule {}
