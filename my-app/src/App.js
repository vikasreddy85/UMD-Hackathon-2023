import React from 'react';
import Banner from "./components/Banner";
import Form from "./components/Form";
import Quotes from "./components/Quotes";
import { Yahentamitsi, South_Diner, North_Diner } from './components/Constants';
import classes from './App.css';

function App() {
  let total_bmr;
  function handleFormSubmit(formData) {
    let name = formData.name;
    let age = formData.age;
    let unit = formData.unit;
    let height = formData.height;
    let weight = formData.weight;
    let location = formData.location;
    let dietaryRestrictions = formData.dietaryRestrictions;
    let active = formData.active;
    let goal = formData.goal;

    console.log(formData);
    total_bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    total_bmr = total_bmr * active;
    if (goal === "Cut Weight") {
      total_bmr -= 500;
    } else if (goal === "Bulk Weight") {
      total_bmr += 500;
    }
    console.log(Yahentamitsi);
    console.log(North_Diner);
    console.log(South_Diner);
  }

  return (
    <div>
      <div className= {classes.wrapper}>
        <div className ={classes.banner}>
          <Banner/>
        </div>
        <div classname={classes.form}>
          <Form/>
        </div>
      </div>
    </div>
  );
}

export default App;
