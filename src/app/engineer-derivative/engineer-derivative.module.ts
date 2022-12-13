import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EngineerDerivativeComponent } from './engineer-derivative.component';

import { EngineerDerivativeRoutingModule } from './engineer-derivative-routing.module';

import { MathjaxModule } from 'mathjax-angular';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        EngineerDerivativeRoutingModule,
        MathjaxModule.forRoot(/*Optional Config*/),
        DragDropModule
    ],
    declarations: [EngineerDerivativeComponent],
    providers: []
})
export class EngineerDerivativeModule { }
