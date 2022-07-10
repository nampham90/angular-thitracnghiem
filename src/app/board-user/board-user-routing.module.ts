import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardUserComponent} from './board-user.component'


const routes: Routes = [
  {path: '', component: BoardUserComponent ,children:[
     {
       path:'',
       loadChildren:()=>import('./dethi/dethi.module').then(mod=>mod.DethiModule)
     }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardUserRoutingModule { }
