import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Message } from './messages-list/message.model';
import 'rxjs/Rx'; // .map()

@Injectable() // This is needed to be able to inject other services into this one
export class BackendService {
  constructor(private http: Http) {}

  sendMessage(message: Message) {
    return this.http.post('https://ng-testing-35377.firebaseio.com/data.json', message);
  }

  getMessages() {
    return this.http.get('https://ng-testing-35377.firebaseio.com/data.json').map(
      (response: Response) => {
        return response.json();
      }
    )
  }
}
