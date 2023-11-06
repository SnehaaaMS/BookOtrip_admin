import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplatesShowComponent } from './templates-show/templates-show.component';
import { TemplatesCreateComponent } from './templates-create/templates-create.component';


const routes: Routes = [

    {
        path: 'show',
        component: TemplatesShowComponent
    },

    {
        path: 'create',
        component: TemplatesCreateComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TemplatesRoutingModule { }
