import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Conversation } from '../../conversation.model'

@Component({
  selector: 'app-conversation-item',
  templateUrl: './conversation-item.component.html',
  styleUrls: ['./conversation-item.component.css']
})
export class ConversationItemComponent implements OnInit {
  @Input() conversation: Conversation;
  @Output() selected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.selected.emit();
  }
}
