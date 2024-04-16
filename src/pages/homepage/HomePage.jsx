import React, { useState } from "react";
import Headers from "../../components/user/headers/Headers";
import Banner from "../../components/user/banner/Banner";
import Service from "../../components/user/service/Service";
import Selling from "../../components/user/selling/Selling";
import Guarantee from "../../components/user/guarantee/Guarantee";
import Footer from "../../components/user/footer/Footer";
import OtherDocuments from "../../components/user/otherDocuments/OtherDocuments";
import ProductCard from "../../components/user/productCard/ProductCard";

function HomePage() {
  const [data, setData] = useState([
    {
      id: 1,
      category: "Máy In UV Phẳng",
      product: [
        {
          id: 1,
          name: "Máy In UV Phẳng Fortune YF-2032KM",
          img: "../../assets/images/UV-phang-3020-Crystal-w.png",
        },
        {
          id: 2,
          name: "Máy In UV Phẳng YF-2512K",
          img: "../../assets/images/UV-phang-3020-Crystal-w.png",
        },
        {
          id: 3,
          name: "Máy In UV Phẳng YF-2512G",
          img: "../../assets/images/UV-phang-3020-Crystal-w.png",
        },
        {
          id: 4,
          name: "Máy In UV YF-7590 – Máy In UV Led Phẳng",
          img: "../../assets/images/UV-phang-3020-Crystal-w.png",
        },
        {
          id: 5,
          name: "Máy In UV Phẳng Fortune YF-2032G",
          img: "../../assets/images/UV-phang-3020-Crystal-w.png",
        },
        {
          id: 6,
          name: "Máy In UV Phẳng YF-2512F",
          img: "../../assets/images/UV-phang-3020-Crystal-w.png",
        },
      ],
    },
    {
      id: 2,
      category: "Máy In UV Cuộn",
      product: [
        {
          id: 1,
          name: "Máy In UV Cuộn YF-3300T",
          img: "../../assets/images/UV-phang-3020-Crystal-w.png",
        },
        {
          id: 2,
          name: "Máy In UV Cuộn YF-3300Z",
          img: "../../assets/images/UV-phang-3020-Crystal-w.png",
        },
      ],
    },
  ]);
  return (
    <>
      <Headers />
      <Banner />
      <Service />

      {data.map((element, index) => (
        <Selling key={index} dataPrint={element} index={index} />
      ))}

      <Guarantee />

      <OtherDocuments />

      <Footer />

      {/* <ProductCard /> */}
    </>
  );
}

export default HomePage;
