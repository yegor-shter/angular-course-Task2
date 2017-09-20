import { Directive, ElementRef, Renderer2, Input, HostListener, OnInit } from '@angular/core';
import {UsersGeneratorComponent} from './../smart-component/users-generator/users-generator.component';

@Directive({
  selector: '[appPicture]'
})
export class PictureDirective implements OnInit {
  @Input()
 getUsr: UsersGeneratorComponent[ ];
 @Input()
 images: string[];
 curentImageIndex = 0;
 constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('click')
  setNextPic() {
  const imageUrl = this.images[this.curentImageIndex];
  console.log(this.images, imageUrl, this.curentImageIndex);
  this.renderer.setAttribute(this.el.nativeElement, 'src', imageUrl);
  this.curentImageIndex++;
  if(this.curentImageIndex > 2){
    this.curentImageIndex = 0;
  }
  }

  ngOnInit(): void {
    this.setNextPic();
  }
}

