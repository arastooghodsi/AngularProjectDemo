import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { TopbarHeaderComponent } from './header/topbar-header/topbar-header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { VirtualTeamComponent } from './virtual-team/virtual-team.component';

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    LoginPageComponent,
    EditProfilePageComponent,
    ShowTableComponent,
    HeaderComponent,
    TopbarHeaderComponent,
    MainPageComponent,
    VirtualTeamComponent,
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
    MatTabsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
