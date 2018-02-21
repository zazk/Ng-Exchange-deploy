/**
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'environments/environment';
import { AppState } from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
  <section class="">
  <div>
    <div class="hero">

      <div class="container has-text-centered">
        <div class="hero-body ">
          <h1 class="title">
            Title
          </h1>
          <h2 class="subtitle">
            Subtitle
          </h2>
        </div>
        <nav class="has-text-centered">
          <a [routerLink]=" ['./landing'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Landing
          </a>
          <a [routerLink]=" ['./'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Index
          </a>
          <a [routerLink]=" ['./home'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Home
          </a>
          <a [routerLink]=" ['./detail'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Detail
          </a>
          <a [routerLink]=" ['./barrel'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Barrel
          </a>
          <a [routerLink]=" ['./about'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            About
          </a>
          <a *ngIf="showDevModule" [routerLink]=" ['./dev-module'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            DevModule
          </a>
        </nav>
      </div>
      
    </div>
      <main>
        <router-outlet></router-outlet>
      </main>

      <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

      <footer>
        <span>Ng Module</span>
      </footer>
    </div>
  </section>
  `
})
export class AppComponent implements OnInit {
  public name = 'Ng Exchange';
  public twitter = 'https://twitter.com/zazk';
  public url = 'https://tipe.io';
  public showDevModule: boolean = environment.showDevModule;

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
