import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsFactoryComponent } from './boards-factory.component';

const routes: Routes = [
  {
    path: '',
    component: BoardsFactoryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardsFactoryRoutingModule { }
