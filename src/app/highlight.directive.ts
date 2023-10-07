import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.background') background = '#3f51b5';
  @HostBinding('style.color') color = '#ffffff';

  @Input() set btnsBackground(color: string){
    this.background = color;
    if (Number(color[1]) <= 4) {
      this.color = '#ffffff'
    } else {
      this.color = '#1f1f1f'
    }
  }

  constructor() { }

}
