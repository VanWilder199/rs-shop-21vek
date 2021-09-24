import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appSwitchColorToAmount]'
})
export class SwitchColorToAmountDirective {
  @Input() amount: string = '';

  private color: string = '';

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
  }

  ngAfterViewInit(): void {
    this.color = SwitchColorToAmountDirective.getColor(+this.amount);
    this.renderer2.setStyle(this.elementRef.nativeElement, 'color', this.color);
  }

  private static getColor(amount: number): string {
    if (amount < 5) {
      return 'red';
    }
    if (amount <= 19 && amount >= 5) {
      return 'yellow';
    }
    if (amount > 20) {
      return 'green';
    }
    return 'black';
  }
}


