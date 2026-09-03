import { Carousel } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "../../components/ProductCard";

import image1 from "../../assets/images/template-1.jpg";
import image2 from "../../assets/images/template-2.jpg";

function Home() {

  //  STATE ADD KARO
  const [products, setProducts] = useState([]);

  //  API CALL
  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>

      {/* HERO SLIDER */}
      <Carousel className="mb-5">
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="Slide 1" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Slide 2" />
        </Carousel.Item>
      </Carousel>

      {/* BEST SELLERS */}
      <h2 className="mb-4">Best Sellers</h2>

      <div className="row">
        {products?.length > 0 &&
          products.map((item) => (
            <div className="col-md-3 mb-4" key={item.id}>
              <ProductCard item={item} />
            </div>
          ))}
      </div>

    </div>
  );
}

export default Home;