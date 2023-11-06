import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccessService } from 'src/app/core/services/access.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-access-user-operation',
  templateUrl: './access-user-operation.component.html',
  styleUrls: ['./access-user-operation.component.scss']
})
export class AccessUserOperationComponent implements OnInit {
  userForm: FormGroup;

  constructor(private accessService: AccessService, private fb: FormBuilder) { }

  @Input() user: any;
  @Input() RolesList;
  isAdd: boolean = true;
  isEdit: boolean = false;

  ngOnInit(): void {
    if(this.user) this.isAdd = false;
    console.log(this.user, this.isAdd)
    document.body.setAttribute('class', 'authentication-bg');
    this.userForm = this.fb.group({
      id: [this.user ? this.user.id : null],
      first_name: [this.user ? this.user.first_name : '', Validators.required],
      last_name: [this.user?this.user.last_name:'', Validators.required],
      email: [this.user?this.user.email:'', [Validators.required, Validators.email]],
      phone: [this.user?this.user.phone:'', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      username: [this.user?this.user.username:'', Validators.required],
      password: [this.user?this.user.password:'', [Validators.required, Validators.minLength(6)]],
      role: [this.user?this.user.role: '', Validators.required],
      confirm_password: [this.user?this.user.confirm_password:'', Validators.required],
    });
  }


  add_user() {
    this.accessService.add_user(this.userForm.value).subscribe(res => {
      alert('Added successfully');
    });
  }

  edit_user(){
    this.accessService.edit_user(this.userForm.value).subscribe(
      (res) => {
        alert('Edited successfully');
      },
      (error) => {
        console.error('An error occurred while editing:', error);
        alert('Failed to edit the user. Please try again later.');
      }
    );
    

  }

}
