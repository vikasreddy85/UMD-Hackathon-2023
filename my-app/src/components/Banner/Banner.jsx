import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import classes from "./Banner.module.css";

export const Banner = () => {
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImageUrls = [
    'https://cdn.winsightmedia.com/platform/files/public/2022-11/background/Blank%201800%20x%20945%20%2814%29.jpg?VersionId=IwANrhYsyWg60l9xsxAzWKVl5jLKSayT',
    'https://today.umd.edu/uploads/hero/DiningServices_Yahentamitsi_08162022_JC_1973_1920x1080.jpg',
    'https://i0.wp.com/mca.design/wp-content/uploads/2018/08/Thumbnail-MCA_Denton_UMCP_2011_091.jpg?fit=730%2C458&ssl=1'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentKeywordIndex(currentIndex => (currentIndex + 1) % keywords.length);
      setCurrentImageIndex(currentIndex => (currentIndex + 1) % backgroundImageUrls.length);
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const currentKeyword = keywords[currentKeywordIndex];
  const currentBackgroundImageUrl = backgroundImageUrls[currentImageIndex];

  return (
      <div className={classes.banner}>
          <div className={classes.background}>
            <div className={classes.image} style={{ backgroundImage: `linear-gradient(to bottom, rgba(179,205,224,0.7), rgba(245,225,218,0.7), rgba(253,213,209,0.7), rgba(250,180,200,0.7), rgba(247,143,179,0.7), rgba(238,102,153,0.7), rgba(221,52,151,0.7), rgba(197,24,156,0.7), rgba(167,4,164,0.7)), url(${currentBackgroundImageUrl})` }}></div>
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
  );
};
