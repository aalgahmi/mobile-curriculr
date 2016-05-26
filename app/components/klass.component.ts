import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Router, RouteSegment, ROUTER_DIRECTIVES} from '@angular/router';
import {KlassService} from '../services/klass.service';
import {Klass} from '../models/klass';

@Component({
  selector: 'klass',
  styles: [`
    .video-container {
      position: relative;
      padding-bottom: 56.25%;
      padding-top: 30px; height: 0; overflow: hidden;
    }

    .video-container iframe,
    .video-container object,
    .video-container embed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }`],
  template: `
    <h5>{{klass.title}}</h5>
    <div class="video-container">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/{{klass.promo}}" frameborder="0"></iframe>
    </div>
    <p>{{klass.about}}</p>
    <a class="button button-primary" [routerLink]="['/klasses']">Back to Classes</a>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class KlassComponent{
  klass: Klass;

  constructor(private _klassService: KlassService, private _router: Router){}

  routerOnActivate(request: RouteSegment){
    this.klass = this._klassService.getKlasses().filter((k) => `${k.id}` == request.getParam('id'))[0];
  }
}
