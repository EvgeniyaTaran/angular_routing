import { Component } from '@angular/core';

@Component({
  selector: 'mail-app',
  styleUrls: ['mail-app.component.scss'],
  templateUrl: 'mail-app.component.html'
})
export class MailAppComponent {
  onActivate(event) {
    console.log('Activate', event);
  }

  onDeactivate(event) {
    console.log('Deactivate', event);
  }
}
