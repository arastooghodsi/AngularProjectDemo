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
import { FirstPageComponent } from './Havadar/first-page/first-page.component';
import { LoginPageComponent } from './Havadar/login-page/login-page.component';
import { EditProfilePageComponent } from './Havadar/edit-profile-page/edit-profile-page.component';
import { ShowTableComponent } from './show-table/show-table.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    VideoPracticeComponent,
    ProjExampleComponent,
    FirstPageComponent,
    LoginPageComponent,
    EditProfilePageComponent,
    ShowTableComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
