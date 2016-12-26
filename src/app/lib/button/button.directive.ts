import { Directive, Input, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({
    selector: '[cuiButton]',
})
export class CuiButtonDirective implements OnInit {
    @Input("color") color: string;

    constructor(private el: ElementRef, private renderer: Renderer) {
        renderer.setElementClass(el.nativeElement, 'btn', true);
                
    }

    ngOnInit() {
        console.log(this.color);
        if(!!this.color){
            this.renderer.setElementClass(this.el.nativeElement, 'btn-'+this.color, true);
        }
    }
}