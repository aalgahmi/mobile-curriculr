import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../models/user';

@Component({
  selector: 'header',
  template: `
    <nav class="navbar container">
      <div class="container">
        <ul class="navbar-list">
          <li class="navbar-item"><div class="navbar-header">Curriculr on the go</div></li>
        </ul>
        <ul *ngIf="_userService.getCurrentUser()" class="navbar-list u-pull-right">
          <li class="navbar-item u-pull-right">
            <a class="navbar-link" (click)='logout()'>Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  `
})
export class HeaderComponent{
  constructor(private _userService: UserService, private _router: Router) {}

  logout() {
    this._userService.logout();
    this._router.navigate(['/login']);
  }
}
