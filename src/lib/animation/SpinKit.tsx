import "./Spinkit.css";
import React from "react";

type SpinKitProps = {
  type?: "pulse" | "chase" | "wave" | "bounce" | "circle" | "grid";
  size?: string;  // Exemplo: "40px"
  color?: string; // Exemplo: "#3498db"
};

const SpinKit: React.FC<SpinKitProps> = ({ type = "pulse", size = "40px", color = "#3498db" }) => {
  const spinnerStyle: React.CSSProperties = {
    width: size,
    height: size,
    backgroundColor: color,
  };

  switch (type) {
    case "pulse":
      return <div className="sk-pulse" style={spinnerStyle}></div>;
    case "chase":
      return (
        <div className="sk-chase">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="sk-chase-dot" style={{ backgroundColor: color }}></div>
          ))}
        </div>
      );
    case "wave":
      return (
        <div className="sk-wave">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="sk-wave-rect" style={{ backgroundColor: color }}></div>
          ))}
        </div>
      );
    case "bounce":
      return (
        <div className="sk-bounce">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="sk-bounce-dot" style={{ backgroundColor: color }}></div>
          ))}
        </div>
      );
      case "circle":
        return (
          <div className="sk-circle">
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`sk-circle sk-circle${i + 1}`}>
                <div className="sk-child" style={{ backgroundColor: color }}></div>
              </div>
            ))}
          </div>
        );


    case "grid":
      return (
        <div className="sk-grid">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="sk-grid-cube" style={{ backgroundColor: color }}></div>
          ))}
        </div>
      );
    default:
      return null;
  }
};

export default SpinKit;
