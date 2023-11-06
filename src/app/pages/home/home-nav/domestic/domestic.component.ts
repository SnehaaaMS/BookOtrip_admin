import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { AccessService } from 'src/app/core/services/access.service';
import { first } from 'rxjs';


@Component({
  selector: 'app-domestic',
  templateUrl: './domestic.component.html',
  styleUrls: ['./domestic.component.scss']
})
export class DomesticComponent {

  domesticForm: FormGroup;

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

    this.domesticForm = this.fb.group({
      is_international:'false',
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
    this.AccessService.save_domestic(this.domesticForm.value).subscribe(res => {
      alert('Added successfully');
    });    
  }

}
