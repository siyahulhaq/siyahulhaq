import { useEffect, useState } from "react";
import "./App.css";
import Landing from "./Components/Landing";
import NavBar from "./Components/NavBar";
import "font-awesome/css/font-awesome.min.css";
function App() {
  const [scrolling, setScrolling] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      setSideBar(false);
      if (document.documentElement.scrollTop > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
  }, []);
  return (
    <div className="app">
      <NavBar
        scrolling={scrolling}
        sideBar={sideBar}
        toggle={() => setSideBar(!sideBar)}
      />
      <Landing />
      <div className="test" />
    </div>
  );
}
export default App;