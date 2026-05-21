import { Component, ChangeDetectorRef } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { AccountService } from './_services';
import { Account, Role } from './_models';
import { AlertComponent } from './_components';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [NgIf, NgClass, RouterLink, RouterLinkActive, RouterOutlet, AlertComponent],
    templateUrl: 'app.html'
})
export class App {
    Role = Role;
    account?: Account | null;

    constructor(
        private accountService: AccountService,
        private cdr: ChangeDetectorRef
    ) {
        this.accountService.account.subscribe(x => {
            this.account = x;
            this.cdr.detectChanges();
        });
    }

    logout() {
        this.accountService.logout();
    }
}