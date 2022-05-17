import { useState, useEffect } from "react";
import Loader from "./Loader";
import { API_KEY, API_URL } from "../config";
import GoodList from "./GoodList";
import Cart from "./Cart";
import Basket from "./Basket";
import { toast } from "react-toastify";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShowed, setBasketShow] = useState(false);

  const addToBusket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });

      setOrder(() => {
        return newOrder;
      });
    }

    toast.success("Goods are added to the basket");
  };

  const handleQuantity = (name, sign) => {
    const newOrder = order.map((item) => {
      if (item.name === name) {
        return {
          ...item,
          quantity:
            sign === "+"
              ? item.quantity + 1
              : sign === "-" && item.quantity > 0
              ? item.quantity - 1
              : 0,
        };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };

  const deleteOrder = (name) => {
    const newOrder = order.filter((item) => item.name !== name);
    setOrder(newOrder);

    toast.warn("Goods are removed from busket");
  };

  const handleBasketShow = () => setBasketShow((prev) => !prev);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((res) => setGoods(res.featured))
      .catch(() => console.log("Error"));
    setLoading(false);
  }, []);

  return (
    <div className="container content shop">
      {isBasketShowed ? (
        <Basket
          handleBasketShow={handleBasketShow}
          order={order}
          deleteOrder={deleteOrder}
          handleQuantity={handleQuantity}
        />
      ) : null}
      <Cart
        handleBasket={handleBasketShow}
        quantity={order ? order.length : ""}
      />
      {loading ? (
        <Loader />
      ) : (
        <GoodList handleCart={addToBusket} goods={goods} />
      )}
    </div>
  );
};

export default Shop;
