import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccessService } from 'src/app/core/services/access.service';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.scss']
})
export class AirlineComponent { 
  airlineForm: FormGroup;

  airlineList:any=[];

  countryList: any = [];
  submitted = false;
  error = '';
  successmsg = false;

  constructor(private fb: FormBuilder, private AccessService: AccessService) {}

  ngOnInit(): void {   
    this.get_countryList();
    this.get_airlineList();

    document.body.setAttribute('class', 'authentication-bg')  

    this.airlineForm = this.fb.group({
      
      country: ['', Validators.required],
     
      image_url: ['', Validators.required],
    });    
  }

  get_countryList() {
    this.AccessService.get_country().subscribe(data => {
      this.countryList = data;
      console.log("Country List:", this.countryList);
    });
  }

  get_airlineList() {
    this.AccessService.get_airline().subscribe(data => {
      this.airlineList = data;
      console.log("popular List:", this.airlineList);
    });
  }
  
  
  

 addform() {
    this.AccessService.save_airline(this.airlineForm.value).subscribe(res => {
      alert('Added successfully');
    });    
  }

}
