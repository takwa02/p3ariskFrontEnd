import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecteurActiviteService {

  private baseUrl = 'http://localhost:8888/p3aActivi';

  constructor(private http: HttpClient) { }
  getSecteurActiviteList(): Observable<any>{
    return this.http.get(`${this.baseUrl+"/list"}`);
    
  }

}
