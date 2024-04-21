import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.jsx";
import DetailProduct from "./components/user/DetailProduct/DetailProduct";
import PrinterRepair from "./components/user/printerRepair/PrinterRepair";
import NotFound from "./components/user/404/NotFound";
import AboutUs from "./components/user/aboutUs/AboutUs";
import DetailPost from "./components/user/detailpost/DetailPost.jsx";
import PostDetailPage from "./pages/homepage/PostDetailPage.jsx";
import Status from "./components/user/status/Status";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/detail-post' element={<PostDetailPage />}></Route>
      <Route path='/detail-product' element={<DetailProduct />}></Route>
      <Route path='/post-detail' element={<Status />}></Route>
      <Route path='/post-detail-doc' element={<PostDetailPage />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
    //
  );
}

export default App;
