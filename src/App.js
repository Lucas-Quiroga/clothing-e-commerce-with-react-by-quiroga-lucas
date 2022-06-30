import './App.css';
// COMPONENTES
import Header from "./Components/Header/Header"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from "./Components/ItemCount"
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

const App = () => {

  return (
    <div className='App'>
    <Header />
    {/* <ItemListContainer greeting="Welcome to my clothing website"/> */}
    <ItemDetailContainer />
    </div>
  );
}

export default App;