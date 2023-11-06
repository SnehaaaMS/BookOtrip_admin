import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { AccessService } from 'src/app/core/services/access.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  offerForm: FormGroup;
  countryList: any = [];
  offerList: any = [];
  submitted = false;
  error = '';
  successmsg = false;

  constructor(private fb: FormBuilder, private AccessService: AccessService) {}

  ngOnInit(): void {   
    this.get_countryList();
    this.get_offerList();

    document.body.setAttribute('class', 'authentication-bg')  

    this.offerForm = this.fb.group({
      save:'true',
      country: ['', Validators.required],
      type: ['', Validators.required],
      image_url: ['', Validators.required],
      heading: ['', Validators.required],
      sub_heading: ['', Validators.required],
      valid_date: ['', Validators.required],
      button_label: ['', Validators.required],
      button_url: ['', Validators.required],
    });
    
  }

  SaveValue() {
    this.offerForm.get('save')?.setValue('false');
    this.AccessService.save_offer(this.offerForm.value).subscribe(res => {
      alert('Added successfully');
    }); 
  }
  

  addform() {
    this.AccessService.save_offer_single(this.offerForm.value).subscribe(res => {
      alert('Added successfully');
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

}
