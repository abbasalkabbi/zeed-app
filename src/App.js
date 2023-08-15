import Header from "./components/Header";
import Home from "./components/Home";
import"./App.scss"
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Download from "./components/Download";
import Contact from "./components/Contact";
import Footer from "./components/Footer";




import {useEffect, useRef, useState, useMemo} from 'react';

export default function App() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  return (
    <div className="App">
      <div ><Header ishome={useIsInViewport(ref1)}  isfeatures={useIsInViewport(ref2)}  ispricing={useIsInViewport(ref3)} isdownload={useIsInViewport(ref4)} iscontact={useIsInViewport(ref5)}/></div>
      <div ref={ref1}><Home/></div>
      <div ref={ref2}> <Features/></div> 
      <div ref={ref3}> <Pricing/></div> 
      <div ref={ref4}> <Download/></div> 
      <div ref={ref5}> <Contact/></div> 
    </div>
  );
}

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}



















// class App extends  Component{
//   // eslint-disable-next-line no-useless-constructor
//   constructor(){
//     super();
//   }
//   Nav(){
//     const isInViewport1 = useIsInViewport(ref1);
//     console.log('isInViewport1: ', isInViewport1);
//   }
//   render(){
//   return (
//     <div className="App">
//       {this.Nav()}
//       <Header ref={ref1}/>
//       <Home/>
//       <Features/>
//       <Pricing/>
//       <Download/>
//       <Contact/>
//       <Footer/>
//     </div>
//   );
//   }
// }


// export default (props)=>(
//   <App
//   {...props}
//   useIsInViewport={useIsInViewport()}
//   />
// )