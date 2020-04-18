import React from 'react';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-image-lightbox/style.css';
import './App.css';
// import './style.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <header className="App-header">
          
        </header> */}
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
