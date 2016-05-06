import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {UserService} from './services/user.service';
import {KlassService} from './services/klass.service';
import {FooterComponent} from './components/footer.component';
import {ContentComponent} from './components/content.component';
import {KlassesComponent} from './components/klasses.component';
import {KlassComponent} from './components/klass.component';

@Component({
  selector: 'mc-app',
  template: `
    <content></content>
    <footer></footer>`,
  directives: [ContentComponent, FooterComponent]
})

export class AppComponent{}

bootstrap(AppComponent, [UserService, KlassService])
