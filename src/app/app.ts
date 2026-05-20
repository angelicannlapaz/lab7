import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

import { AccountService } from './_services';
import { Account, Role } from './_models';
import { AlertComponent } from './_components';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NgClass,
    NgIf,
    AlertComponent
  ]
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