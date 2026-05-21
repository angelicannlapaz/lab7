import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    standalone: true,
    imports: [RouterLink],
    template: `
        <div class="card m-3">
            <h3 class="card-header">Terms & Conditions</h3>
            <div class="card-body">
                <h5>1. Acceptance of Terms</h5>
                <p>By registering, you agree to these terms and conditions.</p>
                <h5>2. User Responsibilities</h5>
                <p>You are responsible for maintaining the confidentiality of your account and password.</p>
                <h5>3. Privacy</h5>
                <p>Your personal information will be kept secure and not shared with third parties.</p>
                <h5>4. Account Termination</h5>
                <p>We reserve the right to terminate accounts that violate these terms.</p>
                <h5>5. Changes to Terms</h5>
                <p>We may update these terms at any time. Continued use of the service constitutes acceptance.</p>
                <a routerLink="../register" class="btn btn-primary mt-3">Back to Register</a>
            </div>
        </div>
    `
})
export class TermsComponent {}