import React from 'react';
import Homepage from './components/Homepage/Homepage';
import { Route, Routes } from "react-router-dom"
import Redeem from './components/Redeem/redeem';
import theme from './themes.js';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/redeem' element={<Redeem />} />
      </Routes>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
