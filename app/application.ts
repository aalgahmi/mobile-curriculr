import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
  selector: 'mc-app',
  template: '<h1>Mobile Curriculr</h1><p>Welcome to our application!</p>'
})
export class AppComponent{}

bootstrap(AppComponent)
