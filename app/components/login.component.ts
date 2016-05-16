import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'login',
  templateUrl: 'app/templates/login.component.html'
})
export class LoginComponent{
  constructor(private _userService: UserService, private _router: Router) {}

  onSubmit() {
    this._userService.login();
    this._router.navigate(['/klasses']);
  }
}
