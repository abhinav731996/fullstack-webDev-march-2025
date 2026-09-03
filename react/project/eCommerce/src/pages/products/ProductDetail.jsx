import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetail() {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mt-4">

      <img src={product.thumbnail} width="300" />

      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <h4>₹{product.price}</h4>

    </div>
  );
}

export default ProductDetail;