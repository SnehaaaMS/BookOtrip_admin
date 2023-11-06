import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './dashboards/default/default.component';


const routes: Routes = [
  { path: '', component: DefaultComponent },
  { path: 'dashboard', component: DefaultComponent },
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
  // { path: 'contacts',loadChildren:() => import('./contacts/contacts.module').then(m => m.ContactsModule)},
  // { path: 'templates',loadChildren:() => import('./templates/templates.module').then(m => m.TemplatesModule)},
  { path:'cms-city',loadChildren:() => import('./cms-city/cms-city.module').then(m => m.CmsCityModule)},
  { path:'role',loadChildren:() => import('./settings/settings.module').then(m => m.SettingsModule)},
  { path:'home',loadChildren:() => import('./home/home.module').then(m => m.HomeModule)},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
