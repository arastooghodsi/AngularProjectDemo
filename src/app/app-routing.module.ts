import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjExampleComponent } from './proj-example/proj-example.component';
import { VideoPracticeComponent } from './video-practice/video-practice.component';
import {FirstPageComponent} from './Havadar/first-page/first-page.component';
import {LoginPageComponent} from './Havadar/login-page/login-page.component';
import {EditProfilePageComponent} from './Havadar/edit-profile-page/edit-profile-page.component';


const routes: Routes = [
  {path: 'example', component: ProjExampleComponent},
  {path: 'video', component: VideoPracticeComponent},
  {path: 'home', component: FirstPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'edit-profile', component: EditProfilePageComponent}
] as Routes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
