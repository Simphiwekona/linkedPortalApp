import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
message: string[] = [];
userInput: string = '';
toggleChatBot: boolean = false;
constructor(private http: HttpClient){}

openChatBot(){
  this.toggleChatBot = true
}

sendMessage() {
  this.message.push(this.userInput);
  this.userInput = '';
}
}
