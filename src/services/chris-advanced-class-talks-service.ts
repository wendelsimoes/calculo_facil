import { Injectable } from "@angular/core";
import VisualNovelTalk from "../shared/visual-novel-talk";
import { ChrisAdvancedClassTalks } from "src/shared/chris-advanced-class-talks";

@Injectable()
class ChrisAdvancedClassTalksService {
  getChrisAdvancedClassTalks(): VisualNovelTalk[] {
    return ChrisAdvancedClassTalks;
  }
}

export default ChrisAdvancedClassTalksService;
