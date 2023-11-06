import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


import { User } from '../models/auth.models';




@Injectable({ providedIn: 'root' })
export class AccessService {

  constructor(private http: HttpClient) { }

 

  get_roles():Observable<any[]>{
    return this.http.get<any[]>(`${environment.apiUrl}/role/`);
  }

  get_country():Observable<any[]>{
    return this.http.get<any[]>(`${environment.apiUrl}/country/`);
  }

  get_airline():Observable<any[]>{
    return this.http.get<any[]>(`${environment.apiUrl}/airline/`);
  }


  get_popular():Observable<any[]>{
    return this.http.get<any[]>(`${environment.apiUrl}/popular_destination/`);
  }


  get_code(search: string):Observable<any[]>{
    return this.http.get<any[]>(`${environment.apiUrl}/airport_code/?search=${search}`);
  }

  get_offer_list():Observable<any[]>{
    return this.http.get<any[]>(`${environment.apiUrl}/offer_type/`);
  }

  save_offer_single(user) {
    return this.http.post(`${environment.apiUrl}/offer/`, user);
  }
  save_offer(user) {
    return this.http.post(`${environment.apiUrl}/offer/`, user);
  }

  add_role(user) {
    return this.http.post(`${environment.apiUrl}/role/`, user);
  }

  save_interNat(user) {
    return this.http.post(`${environment.apiUrl}/flight_deals/`, user);
  }
 
  save_domestic(user) {
    return this.http.post(`${environment.apiUrl}/flight_deals/`, user);
  }


  save_popular(user) {
    return this.http.post(`${environment.apiUrl}/popular_destination/`, user);
  }

  save_airline(user) {
    return this.http.post(`${environment.apiUrl}/airline/`, user);
  }

  add_user(user) {
    return this.http.post(`${environment.apiUrl}/user/`, user);
  }

  edit_user(user) {
    return this.http.patch(`${environment.apiUrl}/user/`, user);
  }

  // list_country():Observable<any[]>{
  //   return this.http.get<any[]>(`${environment.apiUrl}/offer/`);
  // }

  //  list_country(country?: string, type?: string): Observable<any[]> {
  //   const id = user.id;
  //   return this.http.get<any[]>(`${environment.apiUrl}/offer/?country=${id},type=${id}`);
  // }

  list_country(contrId: any,typeId:any) {
     // Assuming 'id' is a property of the 'user' object
    return this.http.get<any[]>(`${environment.apiUrl}/offer/?country=${contrId}&type=${typeId}`);
  }


  get_user_List():Observable<any[]>{
    return this.http.get<any[]>(`${environment.apiUrl}/user/`);
  }

  // get_action():Observable<any[]>{
  //   return this.http.get<any[]>(`${environment.apiUrl}/deactivate_user/`);
  // }

  get_action(user: any) {
    const id = user.id; // Assuming 'id' is a property of the 'user' object
    return this.http.post(`${environment.apiUrl}/deactivate_user/${id}/`, user);
  }
  

  // organisation(user) {
    // const body = { organization_name};
//     return this.http.post(`${environment.apiUrl}/organization/`, user);
// }

  update_role(user) {
    return this.http.patch(`${environment.apiUrl}/update_role/`, user);
  }
  

  isAuthenticatedUser(): boolean {
    return localStorage.getItem('ACCESS_TOKEN') ? true : false;
  }
}