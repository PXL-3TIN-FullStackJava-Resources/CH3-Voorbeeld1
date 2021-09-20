import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: []
})
export class LoginComponent{
    username: string = '';
    password: string = '';
    message: string = 'Please enter login details';

    constructor() { }

    process(): void {
        console.log("Er is op de knop geklikt!");
        this.message = "Logging in " + this.username + "...";
    }
}
