import {Component, Output, EventEmitter} from 'angular2/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'login',
  templateUrl: 'app/templates/login.component.html'
})
export class LoginComponent{
  @Output() loggedIn = new EventEmitter();
  constructor(private _userService: UserService) {}

  onSubmit() {
    this.loggedIn.emit(this._userService.login());
  }
}
