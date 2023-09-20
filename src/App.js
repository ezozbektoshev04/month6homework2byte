// import "./App.css";

import About from "./components/about/About";
import Articles from "./components/articles/Articles";
import Contact from "./components/contact/Contact";
import Covid from "./components/covid/Covid";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Covid />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
