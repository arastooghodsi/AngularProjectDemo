import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoPracticeComponent } from './video-practice/video-practice.component';
import { ProjExampleComponent } from './proj-example/proj-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { AddAccountComponent } from './add-account/add-account.component';
import {LoggingService} from "./loggingService";
import {AccountsService} from "./accounts.service";


@NgModule({
  declarations: [
    AppComponent,
    VideoPracticeComponent,
    ProjExampleComponent,
    AddAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule
  ],
  providers: [LoggingService, AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
