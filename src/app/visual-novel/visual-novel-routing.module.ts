import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualNovelComponent } from './visual-novel.component';

const routes: Routes = [
  {
    path: '',
    component: VisualNovelComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualNovelRoutingModule { }
