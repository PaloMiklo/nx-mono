import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'ns-shell-root',
  template: `
  <ul>
    <li><a routerLink="/">Shell</a></li>
    <li><a routerLink="/ng-mfe/home">Ng mfe</a></li>
  </ul>

  <router-outlet></router-outlet>
`,
  styles: [],
})
export class AppComponent {
  title = 'ns-shell';
}