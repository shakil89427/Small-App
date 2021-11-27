import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Home/Main";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Team from "./Components/Team/Team";
import Career from "./Components/Career/Career";
import Login from "./Components/LoginOrRegister/Login";
import Signup from "./Components/LoginOrRegister/Signup";
import Error from "./Components/Error/Error";
import Contact from "./Components/Contact/Contact";
import AuthProvider from "./Components/AuthProvider/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/team" element={<Team />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
