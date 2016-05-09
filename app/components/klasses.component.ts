import {Component, Output, EventEmitter} from '@angular/core';
import {KlassService} from '../services/klass.service';
import {Klass} from '../models/klass';

@Component({
  selector: 'klasses',
  template: `
    <div *ngFor="#klass of _klassService.getAvailableClasses()">
      <img [src]='klass.poster' class="u-pull-left"/>
      <strong>{{klass.title}}</strong><br>
      <small>By: {{klass.instructor}}</small>
      <p>{{klass.about}}</p>
      <button class="button-primary" (click)='goToClass(klass)'>Go To Class</button>
    </div>
  `
})
export class KlassesComponent{
  @Output() classSelected = new EventEmitter();
  constructor(private _klassService: KlassService) {}

  goToClass(klass){
    this.classSelected.emit(klass);
  }
}
