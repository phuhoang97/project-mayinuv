import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/users/HomePage.jsx";
import DetailProduct from "./components/user/DetailProduct/DetailProduct";
import NotFound from "./components/user/404/NotFound";
import PostDetailPage from "./pages/users/PostDetailPage.jsx";
import Status from "./components/user/status/Status";
import BilldingPage from "./pages/users/BilldingPage.jsx";
import LoginPage from "./pages/admin/LoginPage.jsx";
import { Button, Result } from "antd";
import { useEffect } from "react";
import AdminPage from "./pages/admin/AdminPage.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import ManagerProduct from "./pages/admin/ManagerProduct.jsx";
import MainLayout from "./pages/admin/layouts/index.js";
import ManagerOrder from "./pages/admin/ManagerOrder.jsx";

function App() {
  const checkAdmin = localStorage.getItem("admin");
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.location.pathname.includes("admin")) {
      // localStorage.clear();
    }
  }, [window.location.href, window.location.pathname]);

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/detail-post' element={<PostDetailPage />}></Route>
        <Route path='/products/:id' element={<DetailProduct />}></Route>
        <Route path='/post-detail' element={<Status />}></Route>
        <Route path='/post-detail/:id' element={<Status />}></Route>
        <Route path='/post-detail-doc' element={<PostDetailPage />}></Route>
        <Route path='/billding-detail' element={<BilldingPage />}></Route>
        <Route path='*' element={<NotFound />}></Route>

        <Route
          path='/admin/*'
          element={
            checkAdmin ? (
              <MainLayout />
            ) : (
              <Result
                status='403'
                title={<div className='text-black'>403</div>}
                subTitle={
                  <div className='text-black'>
                    Sorry, you are not authorized to access this page.
                  </div>
                }
                extra={
                  <Button
                    type='primary'
                    onClick={() => navigate("/login")}
                    className='bg-admin-btn-primary'
                  >
                    Login now
                  </Button>
                }
              />
            )
          }
        >
          <Route index element={<Dashboard />}></Route>
          <Route path='manager-product' element={<ManagerProduct />} />
          <Route path='manager-order' element={<ManagerOrder />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
