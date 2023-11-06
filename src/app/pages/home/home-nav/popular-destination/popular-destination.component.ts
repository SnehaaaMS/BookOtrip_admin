import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccessService } from 'src/app/core/services/access.service';

@Component({
  selector: 'app-popular-destination',
  templateUrl: './popular-destination.component.html',
  styleUrls: ['./popular-destination.component.scss']
})
export class PopularDestinationComponent {

  popularForm: FormGroup;

  codeList: any = [];
  popularList:any=[];

  countryList: any = [];
  submitted = false;
  error = '';
  successmsg = false;

  constructor(private fb: FormBuilder, private AccessService: AccessService) {}

  ngOnInit(): void {   
    this.get_countryList();
    this.get_popularList();

    document.body.setAttribute('class', 'authentication-bg')  

    this.popularForm = this.fb.group({
      is_active :'true',
      country: ['', Validators.required],
      city: ['', Validators.required],
      label: ['', Validators.required],
      price: ['', Validators.required],
      image_url: ['', Validators.required],
    });    
  }

  get_countryList() {
    this.AccessService.get_country().subscribe(data => {
      this.countryList = data;
      console.log("Country List:", this.countryList);
    });
  }

  get_popularList() {
    this.AccessService.get_popular().subscribe(data => {
      this.popularList = data;
      console.log("popular List:", this.popularList);
    });
  }
  
  
  

 addform() {
    this.AccessService.save_popular(this.popularForm.value).subscribe(res => {
      alert('Added successfully');
    });    
  }


}
