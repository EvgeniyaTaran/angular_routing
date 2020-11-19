import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http'

import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailFolderComponent } from './containers/mail-folder.component';

import { MailService } from './mail.service';
import { MailFolderResolve } from './containers/mail-folder.resolve';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailViewResolve } from './components/mail-view/mail-view.resolve';

export const ROUTES: Routes = [
  { 
    path: 'folder/:name',
    component: MailFolderComponent,
    resolve: {
      // Resolve is saying to the router that we want to resolve the response 
      // of the mail folder resolve function against a property on a router called messages
      messages: MailFolderResolve
    } 
  },
  { 
    path: 'message/:id', // dynamic value with :
    component: MailViewComponent,
    outlet: 'pane',
    resolve: MailViewResolve
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    MailFolderComponent,
    MailAppComponent,
    MailItemComponent,
    MailViewComponent
  ],
  exports: [
    MailAppComponent,
  ],
  providers: [
    MailService,
    MailFolderResolve,
    JsonPipe,
    // MailViewResolve
  ]
})
export class MailModule {}
