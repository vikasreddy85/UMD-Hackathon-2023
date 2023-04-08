import React, { useState, useEffect } from "react";
import classes from "../components/FrontPage.module.css";

const FrontPage = () => {
  const [keywords, setKeywords] = useState([
    "Stay in Shape",
    "Study Hard",
    "Learn More",
  ]);
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);
  const currentKeyword = keywords[currentKeywordIndex];
  //Handles input values
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [unit, setUnit] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [active, setActive] = useState(3.0);
  const [goal, setGoal] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentKeywordIndex((prevIndex) => (prevIndex + 1) % keywords.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [keywords]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleActiveChange = (event) => {
    setActive(event.target.value);
  };

  const handleGoalChange = (event) => {
    setGoal(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() !== "" && !isNaN(age) && !isNaN(weight)) {
      console.log(
        `Name: ${name}, Age: ${age}, Units: ${unit}, Height: ${height}, Weight: ${weight}, Active: ${active}, Goal: ${goal}`
      );
    } else {
      alert("Please enter a valid name, age and weight.");
    }
  };

  const handleClear = () => {
    setName("");
    setAge("");
    setWeight("");
  };

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
      <div className={classes.inputs}>
        <form onSubmit={handleSubmit}>
          First Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
          <br />
          Age:
          <input
            type="text"
            value={age}
            onChange={handleAgeChange}
            placeholder="Enter your age"
          />
          <br />
          Metric:
          <select value={unit} onChange={handleUnitChange}>
            <option value="kg">kg</option>
            <option value="lbs">lbs</option>
          </select>
          <br />
          Height:
          <input
            type="text"
            value={height}
            onChange={handleHeightChange}
            placeholder="Enter your height"
          />
          <br/>
          Weight:
          <input
            type="text"
            value={weight}
            onChange={handleWeightChange}
            placeholder="Enter your weight"
          />
          <br />
          <input
            type="range"
            min="1"
            max="5"
            step="0.01"
            value={active}
            onChange={handleActiveChange}
            placeholder="Active state"
          />
          <span>{active}</span>
          <br />
          <label htmlFor="dropdown">Select an option:</label>
          <label>
            Goal:
            <br />
            <input
              type="radio"
              name="goal"
              value="Cut Weight"
              checked={goal === "Cut Weight"}
              onChange={handleGoalChange}
            />{" "}
            Cut
            <br />
            <input
              type="radio"
              name="goal"
              value="Maintain Weight"
              checked={goal === "Maintain Weight"}
              onChange={handleGoalChange}
            />{" "}
            Maintain
            <br />
            <input
              type="radio"
              name="goal"
              value="Bulk Weight"
              checked={goal === "Bulk Weight"}
              onChange={handleGoalChange}
            />{" "}
            Bulk
          </label>
          <br />
          <p>Selected option: {goal}</p>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </form>
      </div>
    </div>
  );
};

export default FrontPage;
