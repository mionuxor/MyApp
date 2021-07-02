import './App.css';
import './scss/main.scss';
import {Header} from "./Header";
import {Main} from "./Main";

const dateNow = new Date();

function App() {
  return (
  <>
        <Header date={dateNow}></Header>
          <Main date={dateNow}></Main>
  </>
  );
}

export default App;


// <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
// >
//   Learn React
// </a>