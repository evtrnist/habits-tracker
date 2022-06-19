import {
    Component,
    ComponentRef,
    OnInit,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import { HeaderUserComponent } from '../header-user/header-user.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    @ViewChild('headerUser', { read: ViewContainerRef })
    private viewRef: ViewContainerRef;
    private componentRef: ComponentRef<HeaderUserComponent>;

    constructor() {}

    ngOnInit(): void {
        console.log(123);
    }

    toggle() {
        if (this.viewRef.get(0)) {
            this.viewRef.clear();
        } else {
            this.viewRef.clear();
            this.componentRef =
                this.viewRef.createComponent(HeaderUserComponent);
        }
    }
}
