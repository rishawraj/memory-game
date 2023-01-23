const Card = ({ src, title, handleGameLogic, bgcolor }) => {
  const bgStyle = {
    backgroundColor: `${bgcolor}`,
  };
  return (
    <div
      onClick={handleGameLogic.bind(this, title)}
      className="square"
      style={bgStyle}
    >
      <img src={src} alt="pic" />
      <p>{title}</p>
    </div>
  );
};

export { Card };
