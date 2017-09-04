import { Conversation } from '../conversation-list/conversation.model';

export class Message {
  // These fields are to change to match the proper models
  constructor(
    public id: number,
    public message_text: string,
    public timestamp: Date,
    public sent_by: string,
  ) {}
}
