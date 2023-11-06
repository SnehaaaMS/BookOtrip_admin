import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { UserProfileService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-templates-show',
  templateUrl: './templates-show.component.html',
  styleUrls: ['./templates-show.component.scss']
})
export class TemplatesShowComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserProfileService, private http: HttpClient) { }


  addtemplate(){
    this.router.navigate(['/templates/show']);
  }


}
