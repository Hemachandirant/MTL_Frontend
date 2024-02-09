import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  // summary : string[]

  constructor(private http : HttpClient) { }

  // getSummary(path : any){
  //   return
  // }

  getSummaryByPath(path: any) {
    return this.http.get(`http://127.0.0.1:8080/apiCaseId?caseId=${path}`);
  }
}
