import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {HeaderComponent} from './header.component';
import {UserService} from '../services/user.service';
import {User} from '../models/user';

@Component({
  selector: 'content',
  template: `
    <header></header>
    <div class="content container">
      <div class="row">
        <div class="twelve columns">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
    `,
  directives:[HeaderComponent, ROUTER_DIRECTIVES]
})
export class ContentComponent{
  constructor(private _userService: UserService, private _router: Router){}

  ngOnInit() {
    if(!this._userService.getCurrentUser()){
      this._router.navigate(['login']);
    } else {
      this._router.navigate(['/klasses']);
    }
  }
}
