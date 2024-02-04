import {
  Header,
  About,
  Skills,
  Project,
  Testimonial,
  Contact,
  Footer,
} from "./container";
import { NavBar } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Project />
      <Skills />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
