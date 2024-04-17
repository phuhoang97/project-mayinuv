import NoPage from "../../../assets/images/404-page-not-found-illustration-2048x1462-azn7c8sp.png";
import "../DetailProduct/DetailProduct";
import Footer from "../footer/Footer";
import Headers from "../headers/Headers";
function NotFound() {
  return (
    <>
      <Headers />
      <div className='t-container'>
        <div className='NotFound'>
          <img style={{ width: "100%" }} src={NoPage} alt='notfound' />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
