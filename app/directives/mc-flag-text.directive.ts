import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '.corner-ribbon',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class McFlagTextDirective {
  private el:HTMLElement;

  constructor(el: ElementRef) { this.el = el.nativeElement;  }
  onMouseEnter() { this.changeColor("yellow"); }
  onMouseLeave() { this.changeColor(null); }
  private changeColor(color: string) {
    this.el.style.backgroundColor = color;
  }
}
