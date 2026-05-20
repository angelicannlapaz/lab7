import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from '@app/_services';

@Component({
    templateUrl: 'home.component.html',
    standalone: true,
    imports: [CommonModule]
})
export class HomeComponent {

    constructor(private accountService: AccountService) {}

    get account() {
        return this.accountService.accountValue;
    }
}