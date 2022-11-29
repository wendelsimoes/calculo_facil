import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlindMansGameComponent } from './blind-mans-game.component';

import { BlindMansGameRoutingModule } from './blind-mans-game-routing.module';

import { MathjaxModule } from 'mathjax-angular';
import { DragDropModule } from '@angular/cdk/drag-drop';
import DerivativePairService from 'src/services/derivative-pair-service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BlindMansGameRoutingModule,
    MathjaxModule.forRoot(/*Optional Config*/),
    DragDropModule
  ],
  declarations: [BlindMansGameComponent],
  providers: [DerivativePairService]
})
export class BlindMansModule { }
