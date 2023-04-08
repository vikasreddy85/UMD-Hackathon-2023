import React from 'react';
import Banner from "./components/Banner";
import Form from "./components/Form";
import Quotes from "./components/Quotes";
import { Yahentamitsi } from './components/Constants';
import './App.css';

function App() {
  function handleFormSubmit(formData) {
    console.log(formData);
    console.log(Yahentamitsi);

    /* query, energy,*/
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
