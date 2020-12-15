import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnnualCriteria } from '../model/AnnualCriteria';

@Injectable({
  providedIn: 'root'
})
export class AnnualCriteriaService {

  private baseUrl = 'http://localhost:8888/annualcriteria';

  constructor(private http: HttpClient) { }

  getAnnualCriteriasList(): Observable<any>{
    return this.http.get(`${this.baseUrl+"/list"}`);
    
  }

  getAnnualCriteriasListBycriteriaYear(criteriaYear:number): Observable<any>{
    return this.http.get(`${this.baseUrl+"/list/"+criteriaYear}`);
    
  }

  getAnnualCriteriasListBycriteriaId(criteriaId:number): Observable<any>{
    return this.http.get(`${this.baseUrl+"/listbycriteria/"+criteriaId}`);
    
  }
  public createAnnualCriteria( annualCriteria:  AnnualCriteria): Observable<any> {
    return this.http.post(this.baseUrl+"/add", annualCriteria);
  }

  deleteCriteria(annualCriteriaId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${annualCriteriaId}`);
  }

}
