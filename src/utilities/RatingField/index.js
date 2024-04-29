import React, { useState } from "react";
import styles from "./styles.module.css";

function StarRating({ value, onChange }) {
  const [hoverValue, setHoverValue] = useState(null);

  const handleMouseOver = (newValue) => {
    setHoverValue(newValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  const handleClick = (newValue) => {
    onChange(newValue);
  };

  const renderStar = (index) => {
    const filled = (hoverValue || value) >= index;
    const className = filled ? styles.starFilled : styles.starEmpty; // Use CSS classes

    return (
      <span
        key={index}
        className={`${className} ${styles.goldenSt} `}
        onMouseOver={() => handleMouseOver(index)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(index)}
      >
        ★
      </span>
    );
  };

  return <div>{[1, 2, 3, 4, 5].map((index) => renderStar(index))}</div>;
}

export default StarRating;
