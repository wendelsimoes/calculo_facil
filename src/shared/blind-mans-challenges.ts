import BlindMansChallenge from "./blind-mans-challenge";

export const BlindMansChallenges: BlindMansChallenge[] = [
  {
    fOfX: "\\frac{x^3}{6}-\\ln(x)",
    firstDerivative: "\\frac{x^2}{2}-\\frac{1}{x}",
    secondDerivative: "x+\\frac{1}{x^2}",
    thirdDerivative: "1-\\frac{2}{x^3}",
    forthDerivative: "\\frac{6}{x^4}"
  },
  {
    fOfX: "\\frac{10\\ln(x+10)+x(\\ln(x(x+10))-2)}{2}",
    firstDerivative: "\\frac{\\ln(x*(x+10))}{2}",
    secondDerivative: "\\frac{x+5}{x^2+10x}",
    thirdDerivative: "-\\frac{x^2+10x+50}{x^2(x+10)^2}",
    forthDerivative: "\\frac{(2(x+5)(x^2+10x+100)}{x^3(x+10)^3}"
  }
]
