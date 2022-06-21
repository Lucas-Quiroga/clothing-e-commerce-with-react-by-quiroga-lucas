import './App.css';
// COMPONENTES
import Header from "./Components/Header/Header"
import ItemListContainer from './Components/ItemListContainer';

const App = () => {
  return (
    <div className='App'>
    <Header />
    <ItemListContainer greeting="Welcome to my clothing website"/>
    </div>
  );
}

export default App;