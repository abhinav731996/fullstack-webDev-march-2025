import { useContext } from "react";
import { StoreContext } from "../context/Store";
import { useNavigate } from "react-router-dom";

function ProductCard({ item }) {

  const { addToCart, toggleWishlist, wishlist } =
    useContext(StoreContext);

  if (!item) return null;

  const isWishlisted = wishlist.some((p) => p.id === item.id);

  const navigate = useNavigate();

  return (
    <div className="card h-100">

      <img 
      src={item.thumbnail} 
      className="card-img-top" 
      onClick={() => navigate(`/product/${item.id}`)}
      />

      <div className="card-body">

        <h6>{item.title}</h6>
        <p>₹{item.price}</p>

        <button
          className="btn btn-primary w-100 mb-2"
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </button>

        <button
          className={`btn w-100 ${
            isWishlisted ? "btn-danger" : "btn-outline-danger"
          }`}
          onClick={() => toggleWishlist(item)}
        >
          {isWishlisted ? " Wishlisted" : "Not Wishlist"}
        </button>

      </div>
    </div>
  );
}

export default ProductCard;