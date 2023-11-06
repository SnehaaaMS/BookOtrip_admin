import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessRoleAddComponent } from './access-nav/access-role-add/access-role-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { SimplebarAngularModule } from 'simplebar-angular';
import { SettingsRoutingModule } from './settings-routing.module';
import { AccessUserShowComponent } from './access-nav/access-user-show/access-user-show.component';
import { AccessNavComponent } from './access-nav/access-nav.component';
import { AccessUserOperationComponent } from './access-nav/access-user-operation/access-user-operation.component';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { AccessUserRoleComponent } from './access-nav/access-user-role/access-user-role.component';
const ngWizardConfig: NgWizardConfig = {theme: THEME.default
 
};
@NgModule({
  declarations: [
    AccessRoleAddComponent,
    AccessUserShowComponent,
    AccessNavComponent,
    AccessUserOperationComponent,
    AccessUserRoleComponent
  ],
  exports: [AccessNavComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    NgApexchartsModule,
    SimplebarAngularModule,
    UIModule,
    NgWizardModule.forRoot(ngWizardConfig),
  ]
})
export class SettingsModule { }
