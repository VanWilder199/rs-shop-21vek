import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appSwitchColorToClick]'
})
export class SwitchColorToClickDirective {
  @Input() favorite: string = '';


  private color: string = '';

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
  }

  ngAfterViewInit(): void {
    this.color = SwitchColorToClickDirective.getColor(Boolean(this.favorite));
    this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', this.color);
  }

  private static getColor(amount: boolean): string {
    return true ? 'green' : 'inherit'
  }
}
