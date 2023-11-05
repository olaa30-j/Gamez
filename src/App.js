import React, { useState } from 'react';
import Main from './pages/mainpage/Main.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './pages/mainpage/registeration/LoginForm.jsx';

  export const UserContext = React.createContext();

const App = () => {
  const [library, setLibrary]=useState([]);
  const [cart, setCart]=useState([]);

  return (
    <UserContext.Provider value={{library, setLibrary, cart, setCart}}>
      <Router>
        <div>
          <Routes>
            <Route path='/login' element={<LoginForm />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
