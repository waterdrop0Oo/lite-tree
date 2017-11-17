import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LiteTreeComponent } from './lite-tree/lite-tree.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [DashboardComponent, LiteTreeComponent]
})
export class DashboardModule { }
