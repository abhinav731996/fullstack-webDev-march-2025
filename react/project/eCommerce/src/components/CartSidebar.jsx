// import { useContext } from "react";
// import { StoreContext } from "../context/Store";

// function CartSidebar() {
//   const { cart } = useContext(StoreContext);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         right: 0,
//         top: 0,
//         width: "300px",
//         height: "100vh",
//         background: "#fff",
//         borderLeft: "1px solid #ddd",
//         padding: "10px",
//       }}
//     >
//       <h5>Cart</h5>

//       {cart.map((item, i) => (
//         <div key={i}>
//           <p>{item.title}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CartSidebar;