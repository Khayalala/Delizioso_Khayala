import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import SignUp from "./pages/signUp/SignUp.jsx";
import LogIn from "./pages/logIn/LogIn.jsx";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./assets/helperCSS/fonts.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/logIn" element={<LogIn/>}/>
        </Routes>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
