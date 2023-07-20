import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  messages = ['Hello John 👋🏻', 'How do you do? 🎯'];

  newMessage(message: string): void {
    this.messages.push(message);
    console.log(this.messages);
  }
}
