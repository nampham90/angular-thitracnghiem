import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DethiRoutingModule } from './dethi-routing.module';
import { DethiComponent } from './dethi.component';
import { Dethin5Component } from './dethin5/dethin5.component';
import { Dethin4Component } from './dethin4/dethin4.component';
import { Dethin3Component } from './dethin3/dethin3.component';
import { Dethin2Component } from './dethin2/dethin2.component';
import { Dethin1Component } from './dethin1/dethin1.component';


@NgModule({
  declarations: [
    DethiComponent,
    Dethin5Component,
    Dethin4Component,
    Dethin3Component,
    Dethin2Component,
    Dethin1Component
  ],
  imports: [
    CommonModule,
    DethiRoutingModule
  ]
})
export class DethiModule { }
