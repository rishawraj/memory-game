import { useState } from "react";
import { CardContainer } from "./CardContainer";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Game = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardArr, setCardArr] = useState([]);

  const handleCard = (cardName) => {
    setCardArr([...cardArr, cardName]);
  };

  const handleScore = () => {
    setScore(score + 1);
  };

  const handleHighScore = () => {
    setHighScore(Math.max(highScore, score));
  };

  const reset = () => {
    setScore(0);
    setCardArr([]);
  };

  const handleGameLogic = (cardName) => {
    if (!cardArr.includes(cardName)) {
      handleCard(cardName);
      handleScore();
    } else {
      handleHighScore();
      reset();
    }
  };

  return (
    <div className="container">
      <Header score={score} highScore={highScore} />
      <CardContainer
        score={score}
        highScore={highScore}
        handleGameLogic={handleGameLogic}
      />
      <Footer />
    </div>
  );
};

export { Game };
