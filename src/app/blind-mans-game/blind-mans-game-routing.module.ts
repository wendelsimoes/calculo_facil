import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlindMansGameComponent } from './blind-mans-game.component';

const routes: Routes = [
  {
    path: '',
    component: BlindMansGameComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlindMansGameRoutingModule { }
