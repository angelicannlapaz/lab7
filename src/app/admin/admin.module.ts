import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './accounts/admin-routing.module';

import { SubNavComponent } from './accounts/subnav.component';
import { LayoutComponent } from './accounts/layout.component';
import { OverviewComponent } from './accounts/overview.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AdminRoutingModule
    ],
    declarations: [
        SubNavComponent,
        LayoutComponent,
        OverviewComponent
    ]
})
export class AdminModule { }