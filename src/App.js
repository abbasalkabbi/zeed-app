import Header from "./components/Header";
import Home from "./components/Home";
import"./App.scss"
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Download from "./components/Download";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Features/>
      <Pricing/>
      <Download/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
