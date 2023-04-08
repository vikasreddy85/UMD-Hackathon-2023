import React from 'react';
import Banner from "./components/Banner";
import Form from "./components/Form";
import Quotes from "./components/Quotes";
import { Yahentamitsi, South_Diner, North_Diner } from './components/Constants';
import './App.css';

function App() {
  function handleFormSubmit(formData) {
    console.log(Yahentamitsi);
    console.log(North_Diner);
    console.log(South_Diner);
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
