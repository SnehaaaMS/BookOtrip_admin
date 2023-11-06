import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeNavComponent } from './home-nav/home-nav.component';


const routes: Routes = [
    {
        path: 'nav',
        component: HomeNavComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }