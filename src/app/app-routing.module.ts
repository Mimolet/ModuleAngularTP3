import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ConsultActivitieComponent } from './consult-activitie/consult-activitie.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'consultAct',
    component: ConsultActivitieComponent
  },
  {
    path: 'consultAct/:param1',
    component: ConsultActivitieComponent
  },
  {
    path: 'consultAct/:param1/:param2',
    component: ConsultActivitieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
