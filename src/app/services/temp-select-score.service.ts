import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TempSelectScoreService {
  private baseUrl = 'http://localhost:8888/tpCategory';
  constructor(private http: HttpClient) { }

  
  getTempSelectScoreList(ctrMatfis:string): Observable<any>{
    return this.http.get(`${this.baseUrl+"/tempSelectScore/"+ctrMatfis}`,{observe: 'response'});
    
  }
}
