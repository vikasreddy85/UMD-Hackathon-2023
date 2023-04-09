import React from 'react';
import Banner from "./components/Banner";
import Form from "./components/Form";
import Quotes from "./components/Quotes";
import { Yahentamitsi, South_Diner, North_Diner } from './components/Constants';
import './App.css';

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
    let br = [];
    let lunc = [];
    let din = [];

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
    console.log(total_bmr);

    /*
    const api_url = 
    `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(params.dataType)}&pagesize=${encodeURIComponent(params.pagesize)}`
    */

    if(location == "Y Diner"){
      if(dietaryRestrictions == "none"){
        let holder1 = Yahentamitsi.breakfast.slice();
        let holder2 = Yahentamitsi.lunch.slice();
        let holder3 = Yahentamitsi.dinner.slice();
        for(let i = 0; i < 3; i++){
          const randomIndex1 = Math.floor(Math.random() * holder1.length);
          const randomIndex2 = Math.floor(Math.random() * holder2.length);
          const randomIndex3 = Math.floor(Math.random() * holder3.length);
          br.push(holder1[randomIndex1]);
          lunc.push(holder2[randomIndex2]);
          din.push(holder3[randomIndex3]);
          holder1.splice(randomIndex1, 1);
          holder2.splice(randomIndex2, 1);
          holder3.splice(randomIndex3, 1);
        }
        console.log(br);
        console.log(lunc);
        console.log(din);
      }
    }
  }

  return (
    <div>
      <Banner />
      <Form onSubmit={handleFormSubmit} />
      <Quotes />
    </div>
  );
}

export default App;
