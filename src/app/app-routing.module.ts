import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarcelComponent } from './marcel/marcel.component';
import { HobbysComponent } from './hobbys/hobbys.component';

const routes: Routes = [
  { path: 'marcel', component: MarcelComponent },
  { path: 'hobbys', component: HobbysComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
