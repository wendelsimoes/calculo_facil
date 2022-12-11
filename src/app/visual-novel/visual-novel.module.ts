import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VisualNovelComponent } from './visual-novel.component';

import { VisualNovelRoutingModule } from './visual-novel-routing.module';

import { MathjaxModule } from 'mathjax-angular';
import { DragDropModule } from '@angular/cdk/drag-drop';
import ChrisAdvancedClassTalksService from 'src/services/chris-advanced-class-talks-service';
import DerivativeGameTalksService from 'src/services/derivative-game-talks-service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    VisualNovelRoutingModule,
    MathjaxModule.forRoot(/*Optional Config*/),
    DragDropModule
  ],
  declarations: [VisualNovelComponent],
  providers: [ChrisAdvancedClassTalksService, DerivativeGameTalksService]
})
export class VisualNovelModule { }
