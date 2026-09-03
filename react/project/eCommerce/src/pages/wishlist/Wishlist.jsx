
import { useContext } from "react";
import { StoreContext } from "../../context/Store";
import { Button } from "react-bootstrap";

function Wishlist() {
  const { wishlist, toggleWishlist, addToCart } = useContext(StoreContext);

  return (
    <div className="container mt-4">
      <h3>Wishlist</h3>

      {wishlist.length === 0 ? (
        <h5>Your wishlist is empty</h5>
      ) : (
        wishlist.map((item) => (
          <div key={item.id} className="border d-flex justify-content-around align-items-center p-3 mb-2">
            <h6>{item.title}</h6>

            <img src={item.thumbnail} width="100" />

            <p>₹{item.price}</p>

            <div className="d-flex gap-2">
            {/* REMOVE */}
            <Button
              variant="danger"
              className="mt-2"
              onClick={() => toggleWishlist(item)}
            >
              Remove
            </Button>

            <br />

            {/* ADD TO CART */}
            <Button
              variant="primary"
              className="mt-2"
              onClick={() => {
                addToCart(item);
                toggleWishlist(item);
              }}
            >
              Move to Cart
            </Button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;
