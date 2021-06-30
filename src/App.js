import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Main from './components/Main/Main.jsx'
import Rigthside from './components/RightSide/RightSide.jsx'
import { createContext, useContext,useState } from 'react';
import { EnglishContent,HebrowContent } from './components/RightSideContent/PortfolioContent';
import Home from './components/RightSideContent/Home/Home';

const LanguageArray = [EnglishContent,HebrowContent]
// const Sidebar = styled.div`
// width: 52px;
// background-color: lightblue;
// /* margin-right: -700px; */

// position: relative;
// `
// export const Language = createContext()
function App() {
  // const [LanguageState, setLanguageState] = useState(LanguageArray[0][Home])
  // const ProvideLanguage = Language.Provider
  return (
    <div  className="App">
      <Main className="main_portfolio"></Main>
     {/* <div className="blank"></div> */}
    </div>
  );
}

export default App;
