import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {UserService} from '../services/user.service';
import {KlassService} from '../services/klass.service';
import {McIfWithBadgeDirective} from '../directives/mc-if-with-badge.directive';
import {McBadgedtDirective} from '../directives/mc-badged.directive';
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
    <div *ngFor="let klass of klasses" class="item">
      <div class="image" style="position: relative;">
        <div *mcIfWithBadge="klass.badge" mcBadged>{{klass.badge}}</div>
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
  directives: [ROUTER_DIRECTIVES, McIfWithBadgeDirective, McBadgedtDirective]
})
export class KlassesComponent{
  constructor(private _userService: UserService, private _klassService: KlassService, private _router: Router) {}
  klasses: Klass[];
  ngOnInit() {
    if(!this._userService.getCurrentUser()){
      this._router.navigate(['login']);
    } else {
      this._klassService.getAvailableKlasses().subscribe(
        klasses => this.klasses = klasses,
        error => console.log(error)
      )

      this._router.navigate(['/klasses']);
    }
  }
}
