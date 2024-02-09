import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agent } from 'src/app/AgentReply';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  path : any = "assets/documents/Sample_doc.pdf"
  agent !: string;
  constructor(private route: ActivatedRoute, private chatService : ChatService ){}
  ngOnInit(){
    // this.path = this.route.snapshot.params['path'];
    console.log(this.path)
  }

  messages = [
    { user: "Law Agent", text: "Hi, You can ask your queries related to uploaded document" },
    // { user: "User", text: "Hello" },
    // Add more messages for initial chat history
  ];
  newMessage = "";

  sendMessage() {  
    this.messages.push({ user: "User", text: this.newMessage });  
    this.getReply(this.newMessage);  
    this.newMessage = "";  
  }  

getReply(question: any) {  
  this.chatService.getReply(question).subscribe({  
    next: (response: any) => {  
      this.agent = response['response'];  
      console.log('Response:', this.agent);
      this.messages.push({ user: "Agent", text: this.agent });  
    },  
    error: (error: any) => {  
      console.log('Error:', error);  
    },  
  });   
}    

}
