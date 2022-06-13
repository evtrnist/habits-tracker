import { Component, forwardRef, Input, OnInit, Optional } from '@angular/core';
import {
    ControlContainer,
    ControlValueAccessor,
    FormControl,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
    selector: 'app-custom-input',
    templateUrl: './custom-input.component.html',
    styleUrls: ['./custom-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CustomInputComponent),
            multi: true,
        },
    ],
})
export class CustomInputComponent implements ControlValueAccessor {
    @Input()
    label: string;

    @Input()
    placeholder: string = '';

    @Input()
    type: string = 'text';

    value = '';

    onChange: any = () => {};
    onTouched: any = () => {};

    disabled = false;

    constructor() {}

    writeValue(obj: any): void {
        console.log(obj);
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean) {
        this.disabled = isDisabled;
    }

    updateValue(evt: Event) {
        const target = evt.target as HTMLInputElement;

        if (target) {
            let value = target.value;
            this.value = value; // html
            this.onChange(value); // уведомить Forms API
            this.onTouched();
        }
    }
}
