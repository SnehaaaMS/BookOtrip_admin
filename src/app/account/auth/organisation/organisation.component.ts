
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthenticationService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';
import { first } from 'rxjs/operators';
import { UserProfileService } from '../../../core/services/user.service';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent implements OnInit, AfterViewInit {

  signupForm: UntypedFormGroup;
  submitted = false;
  error = '';
  successmsg = false;
  token: string;

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserProfileService, private http: HttpClient) { }


  ngOnInit() {
    document.body.setAttribute('class', 'authentication-bg');

    this.signupForm = this.formBuilder.group({
      organization_name: ['', Validators.required],
      privacy_policy: [false, Validators.required]
    });

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
  get f() { return this.signupForm.controls; }

  /**
   * On submit form
   */
  onSubmit() {
    this.submitted = true;
    console.log(this.signupForm.value, this.signupForm.invalid)

    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    } else {
      this.userService.organisation(this.signupForm.value)
        .pipe(first())
        .subscribe(
          (data: any) => {
            this.successmsg = true;
            this.router.navigate(['/account/login']);
            this.signupForm.reset();
          },
          error => {
            this.error = error ? error : '';
          });
    }


  }
}

