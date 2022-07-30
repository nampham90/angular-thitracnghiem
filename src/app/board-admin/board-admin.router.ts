import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from './admin/admin.component';
import { TaodethiComponent } from './taodethi/taodethi.component';
import { ListtrinhdoComponent } from './listtrinhdo/listtrinhdo.component';
import { ListtheotrinhdoComponent } from './listtrinhdo/listtheotrinhdo/listtheotrinhdo.component';

import { BoardAdminComponent } from './board-admin.component';
import { ChitietDethiComponent } from './taodethi/chitiet-dethi/chitiet-dethi.component';

const routes: Routes = [
  { path: '', component: BoardAdminComponent },
  {
    path: 'taodethi', component: TaodethiComponent,
  },

  { path: 'dethi/:id', component: ChitietDethiComponent },

  {
    path: 'listtrinhdo',
    component: ListtrinhdoComponent
  },
  {
    path: "listtrinhdo/:id",
    component: ListtheotrinhdoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
