import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesShowComponent } from './templates-show/templates-show.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SimplebarAngularModule } from 'simplebar-angular';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { TemplatesRoutingModule } from './templates-routing.modues';
import { TemplatesCreateComponent } from './templates-create/templates-create.component';
import { EmailEditorModule } from 'angular-email-editor';




@NgModule({
  declarations: [
    TemplatesShowComponent,
    TemplatesCreateComponent,
    
    
  ],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    NgApexchartsModule,
    SimplebarAngularModule,
    UIModule,
    EmailEditorModule
    
  ]
})
export class TemplatesModule { }
