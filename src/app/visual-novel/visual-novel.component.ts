import { Component, OnInit } from '@angular/core';
import ChrisAdvancedClassTalksService from 'src/services/chris-advanced-class-talks-service';
import VisualNovelTalk from 'src/shared/visual-novel-talk';

@Component({
  selector: 'app-visual-novel',
  templateUrl: './visual-novel.component.html',
  styleUrls: ['./visual-novel.component.scss']
})
export class VisualNovelComponent implements OnInit {

  novel!: VisualNovelTalk[];
  currentTalk: number = 0;

  constructor(private chrisAdvancedClassTalksService: ChrisAdvancedClassTalksService) { }

  continue() {
    this.currentTalk += 1;
  }

  ngOnInit(): void {
    const visualNovelCode: number = Number.parseInt(history.state['novelCode']);
    console.log(visualNovelCode);
    switch (visualNovelCode) {
      case 1:
        this.novel = this.chrisAdvancedClassTalksService.getChrisAdvancedClassTalks();
        break;
      default:
    }
  }

}
