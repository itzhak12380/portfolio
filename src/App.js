import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Main from './components/Main/Main.jsx'
import Rigthside from './components/RightSide/RightSide.jsx'
// const Sidebar = styled.div`
// width: 52px;
// background-color: lightblue;
// /* margin-right: -700px; */

// position: relative;
// `
function App() {
  return (
    <div className="App">
      <Main className="main_portfolio"></Main>
     {/* <div className="blank"></div> */}
    </div>
  );
}

export default App;
