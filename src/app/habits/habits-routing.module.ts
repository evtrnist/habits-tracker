import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { HabitsLayoutComponent } from './containers/habits-layout/habits-layout.component';

const routes: Routes = [
    {
        path: '',
        canActivate: [AngularFireAuthGuard],
        component: HabitsLayoutComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HabitsRoutingModule {}
