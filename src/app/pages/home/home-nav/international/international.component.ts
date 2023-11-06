import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { AccessService } from 'src/app/core/services/access.service';
import { first } from 'rxjs';



@Component({
  selector: 'app-international',
  templateUrl: './international.component.html',
  styleUrls: ['./international.component.scss']
})
export class InternationalComponent {
  interNatForm: FormGroup;

  codeList: any = [];

  countryList: any = [];
  submitted = false;
  error = '';
  successmsg = false;

  constructor(private fb: FormBuilder, private AccessService: AccessService) {}

  ngOnInit(): void {   
    this.get_countryList();
    // this. get_codeList('cok') ;

    document.body.setAttribute('class', 'authentication-bg')  

    this.interNatForm = this.fb.group({
      is_international:'true',
      country: ['', Validators.required],
      from_city: ['', Validators.required],
      to_city: ['', Validators.required],
      from_code: ['', Validators.required],
      to_code: ['', Validators.required],
      date: ['', Validators.required],
      label: ['', Validators.required],
      price: ['', Validators.required],
      url: ['', Validators.required],
    });    
    
  }

  get_countryList() {
    this.AccessService.get_country().subscribe(data => {
      this.countryList = data;
      console.log("Country List:", this.countryList);
    });
  }
  
  get_codeList(search) {
    this.AccessService.get_code(search).subscribe(data => {
      this.codeList = data;
      console.log("Country code List:", this.codeList);
    });
  }

 addform() {
    this.AccessService.save_interNat(this.interNatForm.value).subscribe(res => {
      alert('Added successfully');
    });    
  }
}
