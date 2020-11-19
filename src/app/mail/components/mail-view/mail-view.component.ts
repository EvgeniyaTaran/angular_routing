import { Component } from "@angular/core";
import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Mail } from '../../models/mail.interface';
import { MailViewResolve } from './mail-view.resolve';


@Component({
    selector: 'mail-view',
    styleUrls: ['mail-view.component.scss'],
    templateUrl: 'mail-view.component.html',
    providers: [MailViewResolve]
})
export class MailViewComponent {
    constructor(private route: ActivatedRoute) {}
    message: Observable<Mail> = this.route.data.pipe(pluck('message'));
}