import {Component} from 'angular2/core';
import {HeaderComponent} from './header.component';
import {LoginComponent} from './login.component';
import {KlassesComponent} from './klasses.component';
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
          <main [ngSwitch]="getTargetPage()">
            <login   *ngSwitchWhen="'login'" (loggedIn)="whenLoggedIn($event)"></login>
            <klasses *ngSwitchWhen="'klasses'" (classSelected)="whenClassSelected($event)"></klasses>
            <klass   *ngSwitchWhen="'klass'" [klass]="currentClass" (classUnselected)="whenClassUnselected()"></klass>
          </main>
        </div>
      </div>
    </div>
    `,
  directives:[HeaderComponent, LoginComponent, KlassesComponent, KlassComponent]
})
export class ContentComponent{
  currentUser: User;
  currentClass: Klass;

  getTargetPage(){
    if(!this.currentUser){
      return 'login';
    } else {
      if(!this.currentClass){
        return 'klasses'
      }else{
        return 'klass'
      }
    }
  }

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
