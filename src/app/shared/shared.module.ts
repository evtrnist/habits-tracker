import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CustomInputComponent } from './components/input/custom-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [HeaderComponent, CustomInputComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [CustomInputComponent, HeaderComponent],
})
export class SharedModule {}
