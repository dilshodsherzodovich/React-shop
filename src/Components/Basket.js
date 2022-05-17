import React from "react";
import BasketListItem from "./BasketListItem";

function Basket({ order, handleQuantity, deleteOrder, handleBasketShow }) {
  const totalCost = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <div className="base">
      <div className="table-responsive-sm">
        <table className="table table-sm basket-list">
          <h5>Basket</h5>
          <i onClick={handleBasketShow} className="material-icons basket-close">
            close
          </i>
          <tbody>
            {order.length ? (
              order.map((item, index) => (
                <BasketListItem
                  handleQuantity={handleQuantity}
                  deleteOrder={deleteOrder}
                  key={item.id}
                  index={index}
                  {...item}
                />
              ))
            ) : (
              <tr>
                <th>Nothing is bought yet</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            )}
            <tr>
              <td className="table-active">Total</td>
              <td>{totalCost}$</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Basket;
