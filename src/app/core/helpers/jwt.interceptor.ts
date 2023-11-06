import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/auth.service';
import { AuthfakeauthenticationService } from '../services/authfake.service';

import { environment } from '../../../environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService, private authfackservice: AuthfakeauthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        // You can modify the request here before it is sent
    const modifiedReq = request.clone({
        setHeaders: {
          'Authorization': `Token ${localStorage.getItem('ACCESS_TOKEN')}`
        },
      });

      if (request.url.includes('/register') || request.url.includes('reset-password')) {
        // Exclude the authentication header for this specific request
        return next.handle(request);
      }
  
      // Pass the modified request to the next handler
      return next.handle(modifiedReq);
    }
}
