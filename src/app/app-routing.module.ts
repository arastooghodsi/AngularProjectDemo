import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './Havadar/first-page/first-page.component';
import { LoginPageComponent } from './Havadar/login-page/login-page.component';
import { EditProfilePageComponent } from './Havadar/edit-profile-page/edit-profile-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { VirtualTeamComponent } from './virtual-team/virtual-team.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'home', component: FirstPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'edit-profile', component: EditProfilePageComponent },
  { path: 'virtual', component: VirtualTeamComponent}
] as Routes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
