import "../css/Fallback.css";

const Fallback = ({ message = "Something went wrong. Please try again later." }) => (
  <div className="fallback-warning" role="alert">
    <span className="fallback-warning-icon" aria-label="Warning">&#9888;</span>
    <span className="fallback-warning-message">{message}</span>
  </div>
);

export default Fallback;
