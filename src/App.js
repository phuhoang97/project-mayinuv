import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.jsx";
import DetailProduct from "./components/user/DetailProduct/DetailProduct";
import PrinterRepair from "./components/user/printerRepair/PrinterRepair";
import NotFound from "./components/user/404/NotFound";
import AboutUs from "./components/user/aboutUs/AboutUs";

function App() {
  return (
    // <Routes>
    //   <Route path='/' element={<HomePage />}></Route>
    // </Routes>

    // folder Thinh
    // <DetailProduct />
    <PrinterRepair />
    // <NotFound />
    // <AboutUs />
  );
}

export default App;
