import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BootstrapModule } from '../bootstrap.module' ; 
import { CalendarComponent } from './calendar/calendar.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    CalendarComponent,
    HeaderComponent,
    ButtonComponent,
    ScheduleComponent,
    ProfileComponent,
    AdminComponent
  ],
  imports: [
    BootstrapModule,
    ModalModule.forRoot(),
    BrowserModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forChild([
      // Defina as rotas específicas do admin aqui
      { path: '', component: AdminComponent }, // Exemplo de rota para a página principal do admin
    ])
  ]
})
export class AdminModule { }
