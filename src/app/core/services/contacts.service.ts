import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


import { User } from '../models/auth.models';

export interface DropdownOption {
  value: string;
  label: string;
}


@Injectable({ providedIn: 'root' })
export class ContactsService {

  constructor(private http: HttpClient) { }

  getDropdownData() {
    return this.http.get<DropdownOption[]>(`${environment.apiUrl}/datatypes/`);
  }

  getAttribute() {
    return this.http.get<DropdownOption[]>(`${environment.apiUrl}/get_attribute/`);
  }

  getContactList(){
    return this.http.get<any[]>(`${environment.apiUrl}/contactlist/`);
  }

  addcontact(val:any) {
    return this.http.post(`${environment.apiUrl}/add_contact`, val);

  }

   editcontact(user) {
    return this.http.put(`${environment.apiUrl}/edit_contact`, user);

  }

  deletecontact(user) {
    return this.http.delete(`${environment.apiUrl}/delete_contact`, user);

  }



  addattribute(user) {
    return this.http.post(`${environment.apiUrl}/add_attribute/`, user);

  }


  get_roles(){
    return this.http.get<any[]>(`${environment.apiUrl}/get_role/`);
  }


  isAuthenticatedUser(): boolean {
    return localStorage.getItem('ACCESS_TOKEN') ? true : false;
  }
}


