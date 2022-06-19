import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApi } from '../../api/auth.api';

@Component({
    selector: 'app-auth-card',
    templateUrl: './auth-card.component.html',
    styleUrls: ['./auth-card.component.scss'],
})
export class AuthCardComponent implements OnInit {
    form: UntypedFormGroup;

    constructor(private authService: AuthApi, private router: Router) {
        this.buildForm();
    }

    ngOnInit() {
        console.log(this.form);
    }

    onSubmit() {
        const { email, password } = this.form.value;
        this.authService.signIn(email, password).then((res) => {
            console.log(res);
            this.router.navigate(['/habits']);
        });
        console.log(this.form);
    }

    private buildForm() {
        this.form = new UntypedFormGroup({
            email: new UntypedFormControl('', Validators.required),
            password: new UntypedFormControl('', Validators.required),
        });
    }
}
