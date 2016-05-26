import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[mcBadged]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class McBadgedtDirective {
  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    this.el.className = 'corner-ribbon';
  }
  
  onMouseEnter() {
    this.changeColor("#1b9");
  }

  onMouseLeave() {
    this.changeColor(null);
  }

  private changeColor(color: string) {
    this.el.style.backgroundColor = color;
  }
}
