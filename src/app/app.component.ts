import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  title = 'routing';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      //console.log(event);
    })
  }
}
