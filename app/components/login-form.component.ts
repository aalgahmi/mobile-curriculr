import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {UserService} from '../services/user.service';
import {User} from '../models/user';

@Component({
  selector: 'login-form',
  templateUrl: 'app/templates/login-form.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class LoginFormComponent{
  constructor(private _router: Router, private _userService: UserService) {}

  onSubmit() {
    this._userService.login(new User());
    alert('hello');
    this._router.navigate(['HomePath', {}]);
  }
}
