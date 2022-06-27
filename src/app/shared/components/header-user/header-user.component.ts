import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-header-user',
    templateUrl: './header-user.component.html',
    styleUrls: ['./header-user.component.scss'],
})
export class HeaderUserComponent {
    @Output() logOutChange = new EventEmitter<boolean>();

    logOut() {
        this.logOutChange.emit(true);
    }
}
