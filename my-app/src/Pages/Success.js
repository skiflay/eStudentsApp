import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router";
//import { userRequest } from "../requestMethods";

export const Success = () => {
  const location = useLocation();
  const history = useHistory();

  const data = location.state.stripeData;
  const cart = location.state.cart;
  
  const currentUser = useSelector((state) => state.user.currentUser);
  const [order, setOrder] = useState({});

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        };
        setOrder({order, data});
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);
  console.log(order, currentUser)
  console.log('data: ',data, 'cart: ', cart)

  const goHomePage = e=>{
    history.push('/')
  }

  return (
    
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {order.orderId
        ? `Order has been created successfully. Your order number is ${order.orderId}`
        : `Successfull. Your order is being prepared...`}
      <button onClick = {goHomePage} style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
    </div>
  );
};



