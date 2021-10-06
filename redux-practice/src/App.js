import "./App.css";
import CardContainer from "./components/CardContainer";
import Cards from "./components/Cards";
import Header from "./components/Header";
import { MainContainer } from "./styled-components/AppStyle";


function App() {
  return (
    <div className="App">
      <MainContainer>
        <Header/>
        <CardContainer/>
      </MainContainer>
    </div>
  );
}

export default App;
