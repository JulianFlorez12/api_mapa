import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http:HttpClient) { }

  getData(){
   return  this.http.get(`${environment.URL}/getPersonas`);
  }

  getPersona(name){
    return this.http.get(`${environment.URL}/getPersona/${name}`)
  }
}
