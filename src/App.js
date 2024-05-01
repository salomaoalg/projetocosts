import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Container from "./components/layout/Container";
import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";

function App() {
  return (
    <div className="App">
      <p>Costs</p>

      <BrowserRouter>
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/company"}>Company</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/newproject"}>New Project</Link>
        </div>

        <Container customClass="min-height">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/company' element={<NewProject />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/newproject' element={<Company />} />
          </Routes>
        </Container>
      </BrowserRouter>
      <p>Footer</p>
    </div>
  );
}

export default App;
