import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


import { User } from '../models/auth.models';

@Injectable({ providedIn: 'root' })
export class UserProfileService {
    organization_name(value: any) {
      throw new Error('Method not implemented.');
    }
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`/api/login`);
    }

    register(user) {
        return this.http.post(`${environment.apiUrl}/register/`, user);
    }

    organisation(user) {
        // const body = { organization_name};
        return this.http.post(`${environment.apiUrl}/organization/`, user);
    }

    login(username: string, password: string) {
        const body = { username, password };
        return this.http.post(`${environment.apiUrl}/admin_login/`, body);
    }

    password_reset(user) {
        // const body = { email };
        return this.http.post(`${environment.apiUrl}/forgot_password/`, user);
        
    }
    reset_password(password: string) {
        const body = {password}; // Include email in the request body
        return this.http.post(`${environment.apiUrl}/update_password/`, body);
        
    }

    isAuthenticatedUser(): boolean {
        return localStorage.getItem('ACCESS_TOKEN') ? true : false ;
      }
}
