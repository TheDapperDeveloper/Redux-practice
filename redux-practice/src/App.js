import "./App.css";
import CardContainer from "./components/CardContainer";
import Cards from "./components/Cards";
import Header from "./components/Header";
import { MainContainer } from "./styled-components/AppStyle";


function App() {
  return (
    <div className="App">
      <h1>App.js</h1>
      <MainContainer>
        <Header/>
        <CardContainer/>
        <Cards/>
      </MainContainer>
    </div>
  );
}

export default App;
