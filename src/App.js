import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.jsx";
import DetailProduct from "./components/user/DetailProduct/DetailProduct";

function App() {
  return (
    // <Routes>
    //   <Route path='/' element={<HomePage />}></Route>
    // </Routes>
    <DetailProduct />
  );
}

export default App;
