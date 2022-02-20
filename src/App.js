import "./index.css";
import Home from "./components/Home/Home";
import Project from "./components/Projects/Project";
import Footer from "./components/Footer/Footer";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {
  return (
    <div className="App">
      <Home/>
      <Project/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
