import { useContext } from "react";
import { StoreContext } from "../../context/Store";
import { Button } from "react-bootstrap";

function Cart() {

  const { cart, removeFromCart, updateQty } =
    useContext(StoreContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="container mt-4">

      <h3>Shopping Cart</h3>

      {cart.length === 0 ? (
        <h5>Your cart is empty</h5>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="border d-flex justify-content-around align-items-center p-3 mb-2">

            <h6>{item.title}</h6>
            <img src={item.thumbnail} width="100" />
            <p>₹{item.price}</p>

            <div className="d-flex align-items-center gap-2">

              <Button onClick={() => updateQty(item.id, "dec")}>-</Button>

              <span>{item.qty}</span>

              <Button onClick={() => updateQty(item.id, "inc")}>+</Button>

            </div>

            <Button
              variant="danger"
              className="mt-2"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </Button>

          </div>
        ))
      )}

      <h4 className="mt-3">Total: ₹{total}</h4>

    </div>
  );
}

export default Cart;