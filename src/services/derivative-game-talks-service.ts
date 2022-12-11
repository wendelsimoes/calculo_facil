import { Injectable } from "@angular/core";
import VisualNovelTalk from "../shared/visual-novel-talk";
import { DerivativeGameTalks } from "src/shared/derivative-game-talks";

@Injectable()
class DerivativeGameTalksService {
  getDerivativeGameTalks(): VisualNovelTalk[] {
    return DerivativeGameTalks;
  }
}

export default DerivativeGameTalksService;
