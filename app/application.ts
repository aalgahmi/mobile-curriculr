import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {UserService} from './services/user.service';
import {KlassService} from './services/klass.service';
import {HeaderComponent} from './components/header.component';
import {FooterComponent} from './components/footer.component';
import {FrontComponent} from './components/front.component';
import {HomeComponent} from './components/home.component';
import {KlassComponent} from './components/klass.component';

@Component({
  selector: 'mc-app',
  template: `
    <header class="container"></header>
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
    <footer class="container"></footer>`,
  directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent]
})
@RouteConfig([
  {path: '/', name: 'RootPath', redirectTo: ['FrontPath']},
  {path: '/front', name: 'FrontPath', component: FrontComponent},
  {path: '/home', name: 'HomePath', component: HomeComponent},
  {path: '/klass/:id', name: 'KlassPath', component: KlassComponent}
])
export class AppComponent{}

bootstrap(AppComponent, [ROUTER_PROVIDERS, UserService, KlassService])
