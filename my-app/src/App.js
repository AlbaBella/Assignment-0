import React, {Component} from 'react';
import ContactCard from "./ContactCard";
import Decrement from "./Decrement";
import './App.css';



class App extends Component {
  render() {
    return (
    <>
      <ContactCard
       name= "John" 
       mobile="212555555" 
       work="1800222222" 
       email="hello@example.com"
      /> 
      <ContactCard
       name= "Ann" 
       mobile="212555555" 
       work="1800222222" 
       email="ann@example.com"
      />
      <ContactCard
       name= "Serena" 
       mobile="212555555" 
       work="1800222222" 
       email="serena@example.com"
      />
    </>
  );
  }
}

export default App;

