import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../../core/services/authfake.service';

import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { UserProfileService } from '../../../core/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login component
 */
export class LoginComponent implements OnInit, AfterViewInit {

  loginForm: UntypedFormGroup;
  submitted = false;
  error = '';
  returnUrl: string;
  token: string;

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: UntypedFormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService,
    private authFackservice: AuthfakeauthenticationService, private userService: UserProfileService) { }

  ngOnInit() {
    document.body.setAttribute('class', 'authentication-bg');

    this.loginForm = this.formBuilder.group({
      // email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],

    });

    
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngAfterViewInit() {
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }


  onSubmit() {
    this.submitted = true;

    // Stop here if the form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // First, retrieve the token using 
    this.userService.login(this.f.username.value, this.f.password.value).subscribe(
      (response: { token: string }) => {
        if (response && response.token) {
          // Continue with the login using userService.login
          this.userService.login(this.f.username.value, this.f.password.value)
            .subscribe(
              (data: any) => {
                localStorage.setItem('ACCESS_TOKEN', data.token);

                // Successful login, redirect to the dashboard or returnUrl
                // this.router.navigate([this.returnUrl]);
                this.router.navigate(['role/nav']);
              },

              (error) => {
                // Handle login error here, e.g., display an error message
                this.error = 'Authentication failed. Please check your credentials.';
              }
            );
        } else {
          // Handle the case where the API response does not contain a token
          this.error = 'Authentication failed. Unable to retrieve authentication token.';
        }
      },
      (error) => {
        // Handle errors from makeApiRequest if needed
        console.error('Error from makeApiRequest:', error);
        this.error = 'An error occurred during authentication.';
      }
    );
  }
}
