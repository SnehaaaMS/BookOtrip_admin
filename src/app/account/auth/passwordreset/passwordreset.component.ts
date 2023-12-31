import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';
import { first } from 'rxjs/operators';
import { UserProfileService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.scss']
})

/**
 * Reset-password component
 */
export class PasswordresetComponent implements OnInit, AfterViewInit {

  resetForm: UntypedFormGroup;
  submitted = false;
  error = '';
  success = '';
  loading = false;

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: UntypedFormBuilder,
     private route: ActivatedRoute, private router: Router, 
     private authenticationService: AuthenticationService,
     private userService: UserProfileService) { }

  ngOnInit() {
    document.body.setAttribute('class', 'authentication-bg');
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngAfterViewInit() {
  }

  // convenience getter for easy access to form fields
  get f() { return this.resetForm.controls; }

  /**
   * On submit form
   */
  onSubmit() {
    this.success = '';
    this.submitted = true;

    // stop here if form is invalid
    if (this.resetForm.invalid) {
      return;
    }else {
      this.userService.password_reset(this.resetForm.value)
        .pipe(first())
        .subscribe(
          (data:any) => {
            
            this.success = '';
            // this.router.navigate(['/account/login']);
            // this.resetForm.reset();

            alert('Please check your email, we will send you a resetting mail to your registered email');
            
          },
          error => {
            this.error = error ? error : '';
          });
  }
    
  }
}
