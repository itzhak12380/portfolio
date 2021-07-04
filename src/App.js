import './App.css';
import React from 'react'
import styled from 'styled-components';
import PortfolioApp from './components/PortfolioApp';
function App() {
 
  const APPDIV = styled.div`
width: 100vw;
height: 100vh;
  `
  return (

    <APPDIV className="App">
      <PortfolioApp/>
    </APPDIV>
  );
}

export default App;
