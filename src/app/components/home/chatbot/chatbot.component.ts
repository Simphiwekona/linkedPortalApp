import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent implements OnInit {
message: string[] = [];
userInput: string = '';
toggleChatBot: boolean = false;
constructor(private http: HttpClient){}

ngOnInit(): void {
  setTimeout(() => {
    this.toggleChatBot =true;
  }, 220000)
}

openChatBot(){
  this.toggleChatBot = !this.toggleChatBot;
}

sendMessage() {
  this.message.push(this.userInput);
  this.userInput = '';
}
}
