import { Component, ElementRef, ViewChild } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent {
  @Output() newMessageEvent = new EventEmitter<string>();

  @ViewChild('newMessage') newMessage!: ElementRef;

  addNewMessage(value: string| undefined): void {
    this.newMessageEvent.emit(value);
    this.newMessage.nativeElement.value = ''; 
  }
}
