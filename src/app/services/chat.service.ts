import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http : HttpClient) { }

  getReply(question: any) {  
    return this.http.get(`http://127.0.0.1:8000/chatbot/1?query=${question}`);  
  }  
   
  
}
