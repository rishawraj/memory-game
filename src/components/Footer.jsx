import github from "../styles/github2.png";

const Footer = () => {
  return (
    <footer>
      <p>Copyright 2023 Rishaw Raj </p>
      <span className="github-icon">
        <a href="https://github.com/rishawraj" target="_blank">
          <img className="github-icon" src={github} alt="github link" />
        </a>
      </span>
    </footer>
  );
};
export { Footer };
