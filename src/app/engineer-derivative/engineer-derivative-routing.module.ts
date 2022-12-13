import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngineerDerivativeComponent } from './engineer-derivative.component';

const routes: Routes = [
    {
        path: '',
        component: EngineerDerivativeComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EngineerDerivativeRoutingModule { }
