import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {KlassService} from '../services/klass.service';
import {Klass} from '../models/klass';

@Component({
  selector: 'home',
  templateUrl: 'app/templates/home.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent{
  availableClasses: Klass[];
  constructor(private _router: Router, public klassService: KlassService) {}

  goToClass(id: number){
    this._router.navigate(['KlassPath', {id: id}]);
  }
}
