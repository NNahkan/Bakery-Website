import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Feedbacks from "./components/Feedbacks/Feedbacks";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Works from "./components/Works/Works";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Works />
      <Feedbacks />
		<Contact/>
    </>
  );
}

export default App;
