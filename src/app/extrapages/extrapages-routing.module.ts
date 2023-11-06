import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Login1Component } from './login1/login1.component';
import { Register1Component } from './register1/register1.component';
import { RecoverpasswordComponent } from './recoverpassword/recoverpassword.component';

const routes: Routes = [
    {
        path: 'login-1',
        component: Login1Component
    },
    {
        path: 'register-1',
        component: Register1Component
    },
    {
        path: 'recoverpwd-1',
        component: RecoverpasswordComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ExtrapagesRoutingModule { }
