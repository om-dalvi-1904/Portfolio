import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
