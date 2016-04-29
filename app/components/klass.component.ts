import {Component} from 'angular2/core';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {KlassService} from '../services/klass.service';
import {Klass} from '../models/klass';

@Component({
  selector: 'klass',
  templateUrl: 'app/templates/klass.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class KlassComponent{
  klass: Klass;
  constructor(private _router: Router, private _routeParams: RouteParams, private _klassService: KlassService) {}

  ngOnInit(){
    let kid = +this._routeParams.get('id');
    this.klass = this._klassService.getAvailableClasses().filter(k => k.id === kid)[0];
  }
}
