import { BrowserRouter, Routes, Route} from "react-router-dom";

import Container from "./components/layout/Container";
import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Project from "./components/pages/Project";

function App() {
  return (
      <BrowserRouter>
      <NavBar/>
        <Container customClass="min-height">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project' element={<Project />} />
            <Route path='/company' element={<Company />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/newproject' element={<NewProject />} />
          </Routes>
        </Container>
        <Footer/>
      </BrowserRouter>      
  );
}

export default App;
