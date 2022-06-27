import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { CustomInputComponent } from './components/input/custom-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
    declarations: [
        HeaderComponent,
        HeaderUserComponent,
        CustomInputComponent,
        ClickOutsideDirective,
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
    exports: [CustomInputComponent, HeaderComponent],
})
export class SharedModule {}
