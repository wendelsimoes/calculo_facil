import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BoardsFactoryComponent } from './boards-factory.component';

import { BoardsFactoryRoutingModule } from './boards-factory-routing.module';

import { MathjaxModule } from 'mathjax-angular';
import { DragDropModule } from '@angular/cdk/drag-drop';
import DerivativePairService from 'src/services/derivative-pair-service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BoardsFactoryRoutingModule,
    MathjaxModule.forRoot(/*Optional Config*/),
    DragDropModule
  ],
  declarations: [BoardsFactoryComponent],
  providers: [DerivativePairService]
})
export class BoardsFactoryModule { }
