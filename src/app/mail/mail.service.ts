import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mail } from './models/mail.interface';
import { map } from "rxjs/operators"; 
import { JsonPipe } from '@angular/common';

@Injectable()
export class MailService  {
    constructor(private http: HttpClient, private json: JsonPipe) {}

    getFolder(folder): Observable<Mail[]> {
        return this.http
        .get<Mail[]>(`http://localhost:4000/messages?folder=${folder}`);
        //.pipe(map(response => response as Mail[]))
    }

    getMessage(id: string): Observable<Mail> {
        return this.http.get<Mail>(`http://localhost:4000/messages${id}`);
    }
}