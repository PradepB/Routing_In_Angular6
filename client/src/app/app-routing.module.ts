import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from "./list/list.component"
import { DetailsComponent } from "./details/details.component"
import { from } from 'rxjs';
const routes: Routes = [

  {
    path: '',
    component: ListComponent

  },
  {
    path: 'details',
    component: DetailsComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
