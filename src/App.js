import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/users/HomePage.jsx";
import DetailProduct from "./components/user/DetailProduct/DetailProduct";
import NotFound from "./components/user/404/NotFound";
import PostDetailPage from "./pages/users/PostDetailPage.jsx";
import Status from "./components/user/status/Status";
import BilldingPage from "./pages/users/BilldingPage.jsx";
import LoginPage from "./pages/admin/LoginPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/detail-post' element={<PostDetailPage />}></Route>
        <Route path='/products:id' element={<DetailProduct />}></Route>
        <Route path='/post-detail' element={<Status />}></Route>
        <Route path='/post-detail-doc' element={<PostDetailPage />}></Route>
        <Route path='/billding-detail' element={<BilldingPage />}></Route>
        <Route path='*' element={<NotFound />}></Route>

        {/* <Route
        path='/admin/*'
        element={
          checkLogin ? (
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
        <Route path={"register-advise"} element={<RegisterAdvise />} />
        <Route path={"service"} element={<Service />} />
        <Route path={"price-service"} element={<PriceService />} />
        <Route path={"contact-comments"} element={<ContactComments />} />
        <Route path={"product-dentistry"} element={<ProductDentistry />} />
        <Route path={"content-web"} element={<ContentWeb />} />
        <Route path={"news"} element={<NewsAdmin />} />
        <Route path={"customer-documents"} element={<CustomerDocument />} />
      </Route> */}
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
