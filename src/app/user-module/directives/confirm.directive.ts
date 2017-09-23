import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appConfirm]'
})
@Input()
export class ConfirmDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  @HostListener('click')
getMsg(){
alert('Do want to click that button?');

}
}
