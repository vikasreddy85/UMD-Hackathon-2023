import React, { useState, useEffect } from 'react';
import classes from "../components/Form.module.css";

const Form = (props) => {
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

    const handleLocationChange = (event) => {
      setLocation(event.target.value);
    };

    const handleActiveChange = (event) => {
        setActive(event.target.value);
    };

    const handleGoalChange = (event) => {
        setGoal(event.target.value);
    };

    const handleDietaryRestrictions = (event) => {
        setDietaryRestrictions(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.trim() !== "" && !isNaN(age) && !isNaN(weight)) {
          const formData = {
            name,
            age,
            unit,
            height,
            weight,
            location,
            active,
            goal,
            dietaryRestrictions,
          };
          props.onSubmit(formData); // call the onSubmit function passed as a prop
        } else {
          alert("Please enter a valid name, age and weight.");
        }
      };

    const handleClear = () => {
        setName("");
        setAge("");
        setWeight("");
    };

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [unit, setUnit] = useState("kg");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [location, setLocation] = useState("South Diner");
    const [active, setActive] = useState(3.0);
    const [goal, setGoal] = useState("");
    const[dietaryRestrictions, setDietaryRestrictions] = useState("none");

    return (
        <div className={classes.container}>
            <div className={classes.inputs}>
                <form onSubmit={handleSubmit}>
                    Name:
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
                    <br/>
                    Metric:
                    <select value={unit} onChange={handleUnitChange}>
                        <option value="kg">kg / cm</option>
                        <option value="lbs">lbs / ft</option>
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
                    <br/>
                    <br/>
                    Location:
                    <select value={location} onChange={handleLocationChange}>
                        <option value="South Diner"> South Diner</option>
                        <option value="North Diner">North Diner</option>
                        <option value="Y Diner">Yahentamitsi Dining Hall </option>
                    </select>
                    <br/>
                    <br/>
                    Dietary Restrictions:
                    <select value={dietaryRestrictions}onChange={handleDietaryRestrictions}>
                        <option value="none">None</option>
                        <option value="soy">Soy</option>
                        <option value="vegitarian">Vegitarian</option>
                        <option value="dairy">Dairy</option>
                        <option value="eggs">Eggs</option>
                        <option value="gluten">Glutten</option>
                    </select>
                    <br/>
          Active:
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

export default Form;