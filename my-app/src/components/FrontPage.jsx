import React, { useState, useEffect } from 'react';
import classes from "../components/FrontPage.module.css";

const FrontPage = () => {
  const [keywords, setKeywords] = useState(['Stay in Shape', 'Study Hard', 'Learn More']);
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentKeywordIndex((prevIndex) => (prevIndex + 1) % keywords.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [keywords]);

  const currentKeyword = keywords[currentKeywordIndex];

  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <div className={classes.position}>
            <div className={classes.image}></div>
        </div>
        <div className={classes.text}>
            <h2>{currentKeyword}</h2>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
