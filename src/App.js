import Header from "./components/Header";
import Home from "./components/Home";
import"./App.scss"
import Features from "./components/Features";
import Pricing from "./components/Pricing";


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Features/>
      <Pricing/>
    </div>
  );
}

export default App;
