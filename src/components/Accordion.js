
import { useState } from "react";
import "../css/Accordion.css";

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="accordion-item" role="group" aria-label={title}>
      <button
        className="accordion-title"
        aria-expanded={open}
        aria-controls={`accordion-content-${title.replace(/\s+/g, '-')}`}
        onClick={() => setOpen((prev) => !prev)}
        tabIndex={0}
      >
        {title}
        <span className="accordion-arrow" aria-hidden="true">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div
          className="accordion-content"
          id={`accordion-content-${title.replace(/\s+/g, '-')}`}
          tabIndex={0}
          role="region"
          aria-label={`${title} details`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
