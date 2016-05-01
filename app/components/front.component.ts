import {Component} from 'angular2/core';
import {LoginFormComponent} from './login-form.component';
import {HomeComponent} from './home.component';
import {UserService} from '../services/user.service';

@Component({
  selector: 'login',
  template: `
    <login-form *ngIf="!userService.getCurrentUser()"></login-form>
    <home *ngIf="userService.getCurrentUser()"></home>
    `,
  directives:[LoginFormComponent, HomeComponent]
})
export class FrontComponent{
  constructor(public userService: UserService){}

}
