import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './navigation/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyNavbar } from './components/MyNavbar';

function App() {
  return (
    <div className="demo-big-content">
      <BrowserRouter>
        <MyNavbar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
