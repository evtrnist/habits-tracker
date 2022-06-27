import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Output,
} from '@angular/core';

@Directive({
    selector: '[appClickOutside]',
})
export class ClickOutsideDirective {
    @Output()
    public clickOutside = new EventEmitter<void>();

    @HostListener('document:click', ['$event.target'])
    public onClick(target: HTMLElement) {
        const isClickedOutside = this.elementRef.nativeElement.contains(target);

        if (!isClickedOutside) {
            this.clickOutside.emit();
        }
    }

    constructor(private elementRef: ElementRef) {}
}
