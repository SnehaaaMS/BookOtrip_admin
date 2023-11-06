import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthenticationService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';
import { first } from 'rxjs/operators';
import { UserProfileService } from '../../../core/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  
  passwordForm: UntypedFormGroup;
  submitted = false;
  error = '';
  successmsg = false;
  token: string;
  newPassword: string = '';
  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserProfileService, 
    private http: HttpClient) { }


  ngOnInit() {
    document.body.setAttribute('class', 'authentication-bg');

    this.passwordForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      // privacy_policy: [false, Validators.required]
    },
    
    );

    this.route.queryParams.subscribe(params => {
      // You can access the query parameters as properties of the 'params' object.
      const paramValue = params['token']; // Replace 'paramName' with your query parameter name.
      if (paramValue) {
        // Set the token in local storage.
        localStorage.setItem('ACCESS_TOKEN', paramValue);
        this.token = paramValue;
        console.log('ACCESS_TOKEN', paramValue)
      }
    });


  }

 
  ngAfterViewInit() {
  }

  // convenience getter for easy access to form fields
  get f() { return this.passwordForm.controls; }

  /**
   * On submit form
   */
  // onSubmit() {
  //   this.submitted = true;
  //   console.log(this.passwordForm.value, this.passwordForm.invalid)
  //   // stop here if form is invalid
  //   if (this.passwordForm.invalid) {
  //     return;

  //   } else {
  //     this.userService.reset_password(this.passwordForm.value)
  //       .pipe(first())
  //       .subscribe(
  //         (data: any) => {
  //           this.successmsg = true;
  //           this.router.navigate(['/account/login']);
  //           this.passwordForm.reset();
  //         },
  //         error => {
  //           this.error = error ? error : '';
  //         });
  //   }

  // }

  onSubmit() {
    this.submitted = true;

    // Check if the form is invalid
    if (this.passwordForm.invalid) {
      return;
    }

    // Check if the passwords match
    if (this.f.password.value === this.f.confirm_password.value) {
      // Passwords match, store the new password
      this.newPassword = this.f.password.value;

      // Reset the error in case it was previously set due to a mismatch
      this.f.confirm_password.setErrors(null);
      
      // Continue with your existing password reset logic using this.newPassword...
      // For example, you can call the userService.reset_password method here
      this.userService.reset_password(this.newPassword)
        .pipe(first())
        .subscribe(
          (data: any) => {
            this.successmsg = true;
            this.router.navigate(['/account/login']);
            this.passwordForm.reset();
          },
          error => {
            this.error = error ? error : '';
          });
    } else {
      // Passwords don't match, set an error and return
      this.f.confirm_password.setErrors({ mismatch: true });
      return;
    }
  }
}


