import { Directive, ElementRef, Renderer2, Input, HostListener,  OnChanges } from '@angular/core';


@Directive({
  selector: '[appPicture]'
})
export class PictureDirective implements OnChanges {

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
  if (this.curentImageIndex > 2) {
    this.curentImageIndex = 0;
  }
  }
  ngOnChanges(){
    this.setNextPic();
  }

}

