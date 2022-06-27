import {
    Component,
    ComponentRef,
    OnInit,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthApi } from 'src/app/auth/api/auth.api';
import { HeaderUserComponent } from '../header-user/header-user.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    isShownUser = false;

    constructor(private authApi: AuthApi, private router: Router) {}

    ngOnInit(): void {
        console.log(123);
    }

    open(evt: Event) {
        this.isShownUser = true;
        evt.stopPropagation();
    }

    close() {
        if (this.isShownUser) {
            this.isShownUser = false;
        }
    }

    async logOut() {
        await this.authApi.signOut();
        this.router.navigate(['/auth']);
    }
}
