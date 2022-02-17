import { Component } from '@angular/core';
import { AuthService } from '@flight-workspace/shared/util-auth';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService) {
    this.authService.login('MaxMuster', '1235678');
  }
}
