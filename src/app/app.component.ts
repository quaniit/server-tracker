import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {ServerStatusComponent} from "./dashboard/server-status/server-status.component";
import {ServerTrafficComponent} from "./dashboard/server-traffic/server-traffic.component";
import {SupportTicketsComponent} from "./dashboard/support-tickets/support-tickets.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    ServerTrafficComponent,
    SupportTicketsComponent
  ]
})
export class AppComponent {

}
