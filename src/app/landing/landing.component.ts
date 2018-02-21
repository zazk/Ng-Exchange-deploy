import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public days;
  public ngOnInit() {
    console.log('hello `Landing` component');
    this.days =  Array.from({length: 20}, (v, k) => k + 1 );
  }

}
