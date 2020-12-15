import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { Criteria } from '../criteria';
import { map, catchError,tap, delay } from 'rxjs/operators';
import { CriteriaDef } from '../model/CriteriaDef';


@Injectable({
  providedIn: 'root'
})
export class CriteriaService {
  
  private baseUrl = 'http://localhost:8888/criteriaDef';

  constructor(private http: HttpClient) { }

  getCriteria(criteria_id: number): Observable<any> {
    return this.http.get(this.baseUrl+"/"+criteria_id);
  }

  createCriteria(criteria: CriteriaDef): Observable<any> {
    return this.http.post(this.baseUrl+"/add", criteria);
  }

  updateCriteria( criteria: CriteriaDef): Observable<any> {
    return this.http.put(this.baseUrl+"/update", criteria);
  }

  deleteCriteria(criteria_id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${criteria_id}`);
  }

  getCriteriasList(): Observable<any>{
    return this.http.get(`${this.baseUrl+"/list"}`);
    
  }
  

  getAllCriteriasList(): Observable<any>{
    return this.http.get(`${this.baseUrl+"/getAll"}`);
    
  }


 /* getCustomersByAge(age: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }*/

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
 
public getAll(): Observable<any>
{

 return this.http.get(this.baseUrl);

}

getCrit() {
  return this.http.get<Criteria[]>(this.baseUrl).pipe(
    tap(product=> console.log('fetched')),
    catchError(this.handleError('getCrit',[]))
  );
  
     
}
private handleError<T>(operation = 'operation', result?: T )
{
  return(error:any):Observable<T> => {
    console.error(error);
    return of(result as T);
  };
  
}
getProducts(): Observable<any> {
 
  return this.http.get(this.baseUrl).pipe(delay(3000));
}
}

