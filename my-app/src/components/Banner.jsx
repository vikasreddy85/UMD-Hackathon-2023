import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import classes from "../components/Banner.module.css";

const Banner = () => {
  const [keywords, setKeywords] = useState([
    'Fit For Life',
    'Putting Health First',
    'Move Your Body, Shape Your Future',
    'Commit, Perform, Succeed',
    'Don\'t Quit, Get Fit',
    'Stronger, Healthier, Happier',
    'Strong Body, Strong Mind',
    'It’s Never Too Late To Lose The Weight',
    'Stronger every day'
  ]);
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);

  const currentKeyword = keywords[currentKeywordIndex];

  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <div className={classes.position}>
          <div className={classes.image}></div>
        </div>
        <div className={classes.text}>
          <h2>
            <Typewriter
              options={{
                strings: keywords,
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 50,
              }}
            />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;