import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { AccountService } from './_services';
import { Account, Role } from './_models';
import { AlertComponent } from './_components';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [NgIf, RouterLink, RouterLinkActive, RouterOutlet, AlertComponent],
    templateUrl: 'app.html'  // or whatever your template file is named
})
export class App {
    Role = Role;
    account?: Account | null;

    constructor(private accountService: AccountService) {
        this.accountService.account.subscribe(x => this.account = x);
    }

    logout() {
        this.accountService.logout();
    }
}