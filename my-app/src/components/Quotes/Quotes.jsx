import React, { useState, useEffect } from 'react';
import classes from "./Quotes.module.css";

const Quotes = () => {
  const [quotes, setQuotes] = useState([
    "Go to Eppley to lose weight!", "Eat healthy at the Y!", "There are three dining halls at UMD!",
  ]);

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [quotes]);

  const currentQuote = quotes[currentQuoteIndex];
  const textClassName = `${classes.text} ${classes[`text-${currentQuoteIndex}`]}`;

  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <div className={textClassName}>
          <h2>{currentQuote}</h2>
        </div>
      </div>
    </div>
  );
}

export default Quotes;