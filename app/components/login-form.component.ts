import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'login-form',
  templateUrl: 'app/templates/login-form.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class LoginFormComponent{
  constructor(private _router: Router) {}
  login() {
    this._router.navigate(['HomePath', {}]);
  }
}
