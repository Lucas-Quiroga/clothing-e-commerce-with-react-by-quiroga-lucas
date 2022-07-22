import "./App.css";
// COMPONENTES
import Header from "./Components/Header/Header";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import CartProvider from "./Context/CartContext";
import CheckOut from "./Components/Check-out/Check-out";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <CartProvider>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting="Welcome to my clothing website" />
              }
            />
            <Route
              path="/category/:categoryId"
              element={
                <ItemListContainer greeting="Welcome to my clothing website" />
              }
            />
            <Route path="/detail/:detailId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/check-out" element={<CheckOut />} />
          </Routes>
        </CartProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
