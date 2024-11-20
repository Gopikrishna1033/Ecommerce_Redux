import {Provider} from "react-redux";
import store from "./redux/store"
import Header from "./containers/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import Login from "../src/login/Login.jsx";
import Signup from "./containers/signup/Signup";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<ProductListing/>}></Route>
            <Route path="/product/:productId"  element={<ProductDetails/>}></Route>
            <Route path="/login"  element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route>404 Not Found!</Route>
          </Routes>
        </Router>
        
      </Provider>
      
    </div>
  );
}

export default App;
