import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from '../board-admin/board-admin.router'
import { AdminComponent } from './admin/admin.component';
import { TaodethiComponent } from './taodethi/taodethi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListtrinhdoComponent } from './listtrinhdo/listtrinhdo.component';
import { ListtheotrinhdoComponent } from './listtrinhdo/listtheotrinhdo/listtheotrinhdo.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    AdminComponent,
    TaodethiComponent,
    ListtrinhdoComponent,
    ListtheotrinhdoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],

})

export class AdminModule { }
