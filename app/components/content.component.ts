import {Component} from 'angular2/core';
import {HeaderComponent} from './header.component';
import {LoginFormComponent} from './login-form.component';
import {HomeComponent} from './home.component';
import {KlassComponent} from './klass.component';
import {UserService} from '../services/user.service';
import {User} from '../models/user';
import {Klass} from '../models/Klass';

@Component({
  selector: 'content',
  template: `
    <header [currentUser]='currentUser' (loggedOut)="whenLoggedOut()"></header>
    <div class="content container">
      <div class="row">
        <div class="twelve columns">
          <main>
            <login-form *ngIf="!currentUser" (loggedIn)="whenLoggedIn($event)"></login-form>
            <home *ngIf="currentUser && !currentClass" (classSelected)="whenClassSelected($event)"></home>
            <klass *ngIf="currentUser && currentClass" [klass]="currentClass" (classUnselected)="whenClassUnselected()"></klass>
          </main>
        </div>
      </div>
    </div>
    `,
  directives:[HeaderComponent, LoginFormComponent, HomeComponent, KlassComponent]
})
export class ContentComponent{
  currentUser: User;
  currentClass: Klass;

  whenLoggedIn(user){
    this.currentUser = user;
  }

  whenLoggedOut(){
    this.currentUser = undefined;
  }

  whenClassSelected(klass){
    this.currentClass = klass;
  }

  whenClassUnselected(){
    this.currentClass = undefined;
  }
}
