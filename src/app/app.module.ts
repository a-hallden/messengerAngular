// Modules
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from 'ngx-bootstrap';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConversationListComponent } from './conversation-list/conversation-list/conversation-list.component';
import { ConversationItemComponent } from './conversation-list/conversation-list/conversation-item/conversation-item.component';
import { MessagesListComponent } from './messages-list/messages-list/messages-list.component';
import { MessageComponent } from './messages-list/messages-list/message/message.component';


// Services
import { BackendService } from './backend-service';

const appRoutes: Routes = [
  // Add links here
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConversationListComponent,
    ConversationItemComponent,
    MessagesListComponent,
    MessageComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes), // Register the routes by importing the router module and running the forRoot() method, passing the routes const
  ],
  providers: [
    BackendService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
