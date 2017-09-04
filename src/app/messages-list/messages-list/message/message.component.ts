import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Message } from '../../message.model'


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
  @Output() selected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.selected.emit()
  }
}
