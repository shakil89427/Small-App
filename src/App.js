import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Home/Main";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="home" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
