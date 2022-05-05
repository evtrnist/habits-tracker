import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-auth-card',
    templateUrl: './auth-card.component.html',
    styleUrls: ['./auth-card.component.scss'],
})
export class AuthCardComponent implements OnInit {
    form: FormGroup;

    constructor() {
        this.form = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        });
    }

    ngOnInit() {
        console.log(this.form);
    }

    onSubmit() {
        console.log(this.form);
    }
}
