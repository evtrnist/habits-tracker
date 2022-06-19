import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitsRoutingModule } from './habits-routing.module';
import { HabitsLayoutComponent } from './containers/habits-layout/habits-layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [HabitsLayoutComponent],
    imports: [CommonModule, HabitsRoutingModule, SharedModule],
})
export class HabitsModule {}
