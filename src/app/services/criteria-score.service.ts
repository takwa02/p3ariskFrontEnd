import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CriteriaScore } from '../model/CriteriaScore';


@Injectable({
  providedIn: 'root'
})
export class CriteriaScoreService {

  private baseUrl = 'http://localhost:8888/criteriaScore';

  constructor(private http: HttpClient) { }

 
  getCriteriaDefBycriteriaId(criteriaId:number): Observable<any>{
    return this.http.get(`${this.baseUrl+"/CriteriaDef/"+criteriaId}`);
    
  }

  getCriteriaScoreBycriteriaId(criteriaId:number): Observable<any>{
    return this.http.get(`${this.baseUrl+"/"+criteriaId}`);
    
  }
  createCriteriaScore(criteriaScore: CriteriaScore): Observable<any> {
    return this.http.post(this.baseUrl+"/add", criteriaScore);
  }
}
