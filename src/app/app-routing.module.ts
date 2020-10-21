import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjExampleComponent } from './proj-example/proj-example.component';
import { VideoPracticeComponent } from './video-practice/video-practice.component';
import { AddAccountComponent } from './add-account/add-account.component';


const routes: Routes = <Routes>[
  {path: 'example', component: ProjExampleComponent},
  {path: 'video', component: VideoPracticeComponent},
  {path: 'account', component: AddAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
