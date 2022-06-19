import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CustomInputComponent } from './components/input/custom-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderUserComponent } from './components/header-user/header-user.component';

@NgModule({
    declarations: [HeaderComponent, CustomInputComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    entryComponents: [HeaderUserComponent],
    exports: [CustomInputComponent, HeaderComponent],
})
export class SharedModule {}
