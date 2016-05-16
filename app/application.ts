import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, provide} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {Routes, Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router';
import {UserService} from './services/user.service';
import {KlassService} from './services/klass.service';
import {FooterComponent} from './components/footer.component';
import {ContentComponent} from './components/content.component';
import {LoginComponent} from './components/login.component';
import {KlassesComponent} from './components/klasses.component';
import {KlassComponent} from './components/klass.component';

@Component({
  selector: 'mc-app',
  template: `
    <content></content>
    <footer></footer>`,
  directives: [ContentComponent, FooterComponent],
  providers: [UserService, KlassService]
})
@Routes([
  {path: '/login',  component: LoginComponent},
  {path: '/klasses', component: KlassesComponent},
  {path: '/klass/:id', component: KlassComponent}
])
export class AppComponent{
  constructor(private _router: Router){}
  ngOnInit() {
    this._router.navigate(['/login']);
  }
}

//bootstrap(AppComponent, [ROUTER_PROVIDERS])
bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
