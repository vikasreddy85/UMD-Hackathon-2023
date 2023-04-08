import React from 'react';
import Banner from "./components/Banner";
import Form from "./components/Form";
import Quotes from "./components/Quotes";
import './App.css';

function App() {
  let total_bmr;
  function handleFormSubmit(formData) {
    let name;
    let age;
    let unit;
    let height;
    let weight;
    let location;
    let dietaryRestrictions;
    let active;
    let goal;

    console.log(formData);
    name = formData.name;
    age = formData.age;
    unit = formData.unit;
    height = formData.height;
    weight = formData.weight;
    location = formData.location;
    dietaryRestrictions = formData.dietaryRestrictions;
    active = formData.active;
    goal = formData.goal;
    total_bmr = (10*weight) + (6.25*height) - (5*age) + 5;
    total_bmr = total_bmr * active;
    if(goal == "Cut Weight"){
      total_bmr -= 500;
    } else if(goal == "Bulk Weight"){
      total_bmr += 500;
    } 
  



  }
  
  return (
    <div>
      <Banner/>
      <Form onSubmit={handleFormSubmit}/>
      <Quotes/>
    </div>
  );
}

export default App;