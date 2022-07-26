import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChitietDethiComponent } from "./chitiet-dethi/chitiet-dethi.component";


const routes: Routes = [
  { path: 'dethi/:id', component: ChitietDethiComponent },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaoDeThiRoutingModule { }
