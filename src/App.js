import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.jsx";
import DetailProduct from "./components/user/DetailProduct/DetailProduct";
import PrinterRepair from "./components/user/printerRepair/PrinterRepair";

function App() {
  return (
    // <Routes>
    //   <Route path='/' element={<HomePage />}></Route>
    // </Routes>
    // <DetailProduct />
    <PrinterRepair />
  );
}

export default App;
