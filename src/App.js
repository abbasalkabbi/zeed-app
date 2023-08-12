import Header from "./components/Header";
import Home from "./components/Home";
import"./App.scss"
import Features from "./components/Features";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Features/>
    </div>
  );
}

export default App;
