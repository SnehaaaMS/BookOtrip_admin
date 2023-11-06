import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityListComponent } from './city-list/city-list.component';
import { CmsCityRoutingModule } from './cms-city-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SimplebarAngularModule } from 'simplebar-angular';


@NgModule({
  declarations: [
    CityListComponent
  ],
  imports: [
    CommonModule,
    CmsCityRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    NgApexchartsModule,
    SimplebarAngularModule,
    UIModule
    
  ]
})
export class CmsCityModule { }
