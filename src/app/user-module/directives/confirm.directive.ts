import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appConfirm]'
})

export class ConfirmDirective {
  @Input() notice = 'Would u like to download users?';
  constructor() { }
  @HostListener('click')
getMsg(){
alert(this.notice);

}
}
