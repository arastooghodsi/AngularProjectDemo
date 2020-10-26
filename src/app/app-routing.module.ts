import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjExampleComponent } from './proj-example/proj-example.component';
import { VideoPracticeComponent } from './video-practice/video-practice.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { TempComponent } from './temp/temp.component';


const routes: Routes = [
  {path: 'example', component: ProjExampleComponent},
  {path: 'video', component: VideoPracticeComponent},
  {path: 'account', component: AddAccountComponent},
  {path: 'temp', component: TempComponent}
] as Routes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
