import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { OffersComponent } from './home-nav/offers/offers.component';
import { OfferTableComponent } from './home-nav/offer-table/offer-table.component';
import { InternationalComponent } from './home-nav/international/international.component';
import { DomesticComponent } from './home-nav/domestic/domestic.component';
import { PopularDestinationComponent } from './home-nav/popular-destination/popular-destination.component';
import { AirlineComponent } from './home-nav/airline/airline.component';
import { DescriptionComponent } from './home-nav/description/description.component';
import { FooterComponent } from './home-nav/footer/footer.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';





@NgModule({
  declarations: [
    HomeNavComponent,
    OffersComponent,
    OfferTableComponent,
    InternationalComponent,
    DomesticComponent,
    PopularDestinationComponent,
    AirlineComponent,
    DescriptionComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    NgApexchartsModule,
    SimplebarAngularModule,
    UIModule,
    CKEditorModule
    
  ]
})
export class HomeModule { }
