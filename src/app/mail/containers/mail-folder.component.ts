import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Mail } from '../models/mail.interface';



@Component({
  selector: 'mail-folder',
  styleUrls: ['mail-folder.component.scss'],
  template: `
    <h2>{{title | async}}</h2>
    <!--<p>{{data | json}}</p>-->
    <mail-item
      *ngFor="let message of (messages | async).messages"
      [message]="message">
    </mail-item>
  `
})
export class MailFolderComponent {
  // messages: Mail[] = [{
  //   "id": 1,
  //   "folder": "inbox",
  //   "from": "Jane Smith",
  //   "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus",
  //   "timestamp": 1487848162905
  // }];
  constructor(private route: ActivatedRoute) {}
  messages: Observable<any> = this.route.data; //.pipe(pluck("_value", "messages"))
  title: Observable<string> = this.route.params.pipe(pluck("name"));
}
