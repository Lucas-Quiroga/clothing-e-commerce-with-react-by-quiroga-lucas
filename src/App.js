import './App.css';
// COMPONENTES
import Header from "./Components/Header/Header"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from "./Components/ItemCount"
import { useState } from 'react';

const App = () => {

  const onadd=(value)=>{
    alert(`Adding ${value} products`)
  }

  return (
    <div className='App'>
    <Header />
    <ItemListContainer greeting="Welcome to my clothing website"/>
    <ItemCount intial={1} stock={10} onadd={onadd}/>
    </div>
  );
}

export default App;