import React  from 'react';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Provider } from 'react-redux'
import store from './store/store';
import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Orders from './pages/Orders';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="layout">
          <Header />
          <main>
           <Navbar />
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/orders" element={<Orders />} exact />
            </Routes>
          </main>
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
