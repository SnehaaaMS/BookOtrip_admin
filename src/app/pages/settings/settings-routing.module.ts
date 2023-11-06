import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessRoleAddComponent } from './access-nav/access-role-add/access-role-add.component';
import { AccessUserShowComponent } from './access-nav/access-user-show/access-user-show.component';
import { AccessNavComponent } from './access-nav/access-nav.component';



const routes: Routes = [
    {
        path: 'nav',
        component: AccessNavComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }