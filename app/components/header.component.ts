import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'header',
  template: `
    <h4>
      Curriculr on the go
      <button *ngIf="_userService.getCurrentUser()" class="button button-primary u-pull-right" (click)='logout()'>Logout</button>
    </h4><hr/>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent{
  constructor(private _router: Router, private _userService: UserService) {}

  logout() {
    this._userService.logout();
    this._router.navigate(['RootPath', {}]);
  }
}
