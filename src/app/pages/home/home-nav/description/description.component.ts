import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccessService } from 'src/app/core/services/access.service';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';



@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {

  countryList: any = [];

  public Editor = ClassicEditor;

  descriptionForm: FormGroup;


  constructor(private fb: FormBuilder, private AccessService: AccessService) {}


  ngOnInit(): void {   
    this.get_countryList();
    document.body.setAttribute('class', 'authentication-bg')  

    this.descriptionForm = this.fb.group({

      country: ['', Validators.required],
      heading:['',Validators.required],
      description:['',Validators.required]     
    });    
  }

  get_countryList() {
    this.AccessService.get_country().subscribe(data => {
      this.countryList = data;
      console.log("Country List:", this.countryList);
    });
  }

  add(){
    alert('sucess')
  }

}
