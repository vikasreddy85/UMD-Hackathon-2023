import React from 'react';
import Banner from "./components/Banner";
import Form from "./components/Form";
import Quotes from "./components/Quotes";
import './App.css';

function App() {
  function handleFormSubmit(formData) {
    console.log(formData);
    /* query, energy,*/
    const dining = {

    }
    
    const mango = {
      api_key: 'MPGogOa9dZbgva6VN9LCcgdovtIMdFIDk6Uv4hlO',
      query: 'mango',
      dataType: ["Survey (FNDDS)"],
      pagesize: 1,
      location: "Y",
      time: "lunch",
      dietary: "none",
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