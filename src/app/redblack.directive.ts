import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedblack]'
})
export class RedblackDirective {

  element : ElementRef

  constructor(private el : ElementRef) { 
    el.nativeElement.style.color ="white"
    el.nativeElement.style.backgroundColor ="black"
    this.element = el;
  }

  ngOnInit(){
    this.element.nativeElement.innerText += ' -Rendered by appRedblack'
  }

}
