import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DethiComponent } from './dethi.component';
import { BaikiemtraComponent } from '../baikiemtra/baikiemtra.component';
import { Dethin5Component} from "./dethin5/dethin5.component"
import { Dethin4Component} from "./dethin4/dethin4.component"
import { Dethin3Component} from "./dethin3/dethin3.component"
import { Dethin2Component} from "./dethin2/dethin2.component"
import { Dethin1Component} from "./dethin1/dethin1.component"

const routes: Routes = [
  {path: '', component:DethiComponent},
  {path: 'dethi/n5' , component:Dethin5Component},
  {path: 'dethi/n4' , component:Dethin4Component},
  {path: 'dethi/n3' , component:Dethin3Component},
  {path: 'dethi/n2' , component:Dethin2Component},
  {path: 'dethi/n1' , component:Dethin1Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DethiRoutingModule { }
