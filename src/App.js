import './App.css';
// COMPONENTES
import Header from "./Components/Header/Header"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './Components/About/About';

const App = () => {

  return (
    
      <BrowserRouter>
      <Header />
      <div className='App'>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Welcome to my clothing website"/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Welcome to my clothing website"/>}/>
        <Route path='/detail/:detailId' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
        </div>
      </BrowserRouter>
    
  );
}

export default App;