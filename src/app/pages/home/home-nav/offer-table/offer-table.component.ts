import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccessService } from 'src/app/core/services/access.service';

@Component({
  selector: 'app-offer-table',
  templateUrl: './offer-table.component.html',
  styleUrls: ['./offer-table.component.scss']
})
export class OfferTableComponent {
  // @Input() offerList;
  // @Input() countryList;

  countryForm: FormGroup;
  countryList: any = [];
  offerList: any = [];
  filteredList: any = [];

  constructor(private fb: FormBuilder,private AccessService: AccessService) {}

  ngOnInit() {
    this.get_countryList();
    this.get_offerList();

    // this.getlist();

    document.body.setAttribute('class', 'authentication-bg')  
    this.countryForm = this.fb.group({
      country: ['', Validators.required],
      type: ['', Validators.required],
    });
  }


  get_countryList() {
    this.AccessService.get_country().subscribe(data => {
      this.countryList = data;
      console.log("Country List:", this.countryList);
    });
  }

  get_offerList() {
    this.AccessService.get_offer_list().subscribe(data => {
      this.offerList = data;
      console.log("Offer List:", this.offerList);
    });
  }


  getlist(){
    console.log(this.countryForm);
    
    let countryIdToPass = this.countryForm.value.country;
    let typeIdToPass = this.countryForm.value.type;
    this.AccessService.list_country(countryIdToPass,typeIdToPass).subscribe(data => {

      this.filteredList = data;
      console.log("UniqueList:", this.filteredList);
      alert('success');
    });  

  }

}
