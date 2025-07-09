import About from "./components/About/About";
import CometCursor from "./components/CometCursor";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Hobbies from "./components/Hobbies/Hobbies";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

function App() {
  return (
    <>
      <CometCursor />
      <Header />
      <Hero />
      <About />
      <Hobbies />
      <Projects />
      <Skills />
      <Contact />
      <ScrollToTopButton />
    </>
  );
}

export default App;
