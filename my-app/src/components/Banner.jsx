import React, { useState, useEffect } from 'react';
import classes from "../components/Banner.module.css";
/*Create the line for typewritter effect!*/
const Banner = () => {
  const [keywords, setKeywords] = useState(['Fit For Life', 'Putting Health First', 'Move Your Body, Shape Your Future', 'Commit, Perform, Succeed',    'Don\'t Quit, Get Fit', 'Stronger, Healthier, Happier', 'Strong Body, Strong Mind', 'It’s Never Too Late To Lose The Weight', 'Stronger every day']);
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  
  const currentKeyword = keywords[currentKeywordIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentText.length < currentKeyword.length) {
        setCurrentText(currentKeyword.substring(0, currentText.length + 1));
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setCurrentText("");
          setCurrentKeywordIndex((prevIndex) => (prevIndex + 1) % keywords.length);
        }, 2000);
      }
    }, 200);

    return () => clearInterval(intervalId);
  }, [keywords, currentKeyword, currentText]);

  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <div className={classes.position}>
          <div className={classes.image}></div>
        </div>
        <div className={classes.text}>
          <h2>{currentText}</h2>
        </div>
      </div>
    </div>
  );
}

export default Banner;