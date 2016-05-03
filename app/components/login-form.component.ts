import {Component, Output, EventEmitter} from 'angular2/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'login-form',
  templateUrl: 'app/templates/login-form.component.html'
})
export class LoginFormComponent{
  @Output() loggedIn = new EventEmitter();
  constructor(private _userService: UserService) {}

  onSubmit() {
    this.loggedIn.emit(this._userService.login());
  }
}
