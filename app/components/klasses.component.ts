import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {UserService} from '../services/user.service';
import {KlassService} from '../services/klass.service';
import {McNewClassDirective} from '../directives/mc-new-class.directive';
import {McFlagTextDirective} from '../directives/mc-flag-text.directive';
import {Klass} from '../models/klass';

@Component({
  selector: 'klasses',
  styles: [`
    .item {
      padding-top: 2rem;
      border-bottom: 1px solid #eee;
    }

    .item:last-child {
      border-bottom: none;
    }

    .item .poster{
      margin: 5px;
      padding: 4px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    .item .description {
      display: table-cell;
      padding-left: 10px;
    }

    .item .description p {
      margin-bottom: 1rem;
    }
  `],
  template: `
    <div *ngFor="let klass of _klassService.getAvailableKlasses()" class="item">
      <div class="image" style="position: relative;">
        <div *mcNewClass="klass.new" class="corner-ribbon">New</div>
        <img [src]='klass.poster' class="poster u-pull-left"/>
      </div>
      <div class="description">
        <strong>{{klass.title}}</strong><br>
        <small>By: {{klass.instructor}}</small>
        <p>{{klass.about}}</p>
        <a class="button button-primary" [routerLink]="['/klass/' + klass.id]">Go To Class</a>
      </div>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES, McNewClassDirective, McFlagTextDirective]
})
export class KlassesComponent{
  constructor(private _userService: UserService, private _klassService: KlassService, private _router: Router) {}

  ngOnInit() {
    if(!this._userService.getCurrentUser()){
      this._router.navigate(['login']);
    } else {
      this._router.navigate(['/klasses']);
    }
  }
}
