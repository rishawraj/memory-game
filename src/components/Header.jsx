const Header = ({ score, highScore }) => {
  return (
    <>
      <header className="header">
        <h1 className="main-title">Pokemon Memory Game</h1>
        <div className="score-board">
          <div className="score-btn">Score: {score}</div>
          <div className={highScore === 6 ? "max-score" : "score-btn"}>
            High Score: {highScore === 6 ? "Max Score" : highScore}
          </div>
        </div>
      </header>
    </>
  );
};

export { Header };
