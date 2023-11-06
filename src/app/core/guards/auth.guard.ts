import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserProfileService } from '../services/user.service';
import { ContactsService } from '../services/contacts.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: UserProfileService,
        
        
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        // not logged in so redirect to login page with the return url
        if (this.authService.isAuthenticatedUser()) {
            return true; // Allow access to the route if the user is authenticated.
          } else {
              this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
            return false; // Prevent access to the route.
          }
        return false;
    }
}
