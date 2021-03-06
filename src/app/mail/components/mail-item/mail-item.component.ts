import { isNgTemplate } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-item',
  styleUrls: ['mail-item.component.scss'],
  templateUrl: 'mail-item.component.html'
})

export class MailItemComponent {
  @Input()
  message: Mail;

  constructor(private router: Router){}
  navigateToMessage() {
    this.router.navigate(['', { outlets: {pane : ['message', this.message.id]}}])
  }
}
