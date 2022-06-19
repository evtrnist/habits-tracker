import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-habits-layout',
    templateUrl: './habits-layout.component.html',
    styleUrls: ['./habits-layout.component.scss'],
})
export class HabitsLayoutComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        console.log(123);
    }
}
