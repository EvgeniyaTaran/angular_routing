import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'

import { MailModule } from './mail/mail.module';

import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '**', redirectTo: 'folder/inbox' } // **  is any root that doesn't exist in application
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MailModule,
    RouterModule.forRoot(routes/*, { enableTracing: true }*/)
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
