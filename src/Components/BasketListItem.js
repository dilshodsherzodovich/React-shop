import React from "react";

function BasketListItem(props) {
  const { name, price, quantity, handleQuantity, deleteOrder } = props;
  return (
    <tr>
      <th scope="col">
        <span>{name}</span>
        <span className="ml-2 spq">{`${quantity}X ${price} = ${
          quantity * price
        }`}</span>
      </th>
      <th scope="col">
        <div className="scale d-flex">
          <button
            onClick={() => {
              handleQuantity(name, "+");
            }}
            className="btn  add"
          >
            +
          </button>
          <button className="btn  quantity">{quantity}</button>
          <button
            onClick={() => {
              handleQuantity(name, "-");
            }}
            className="btn  remove"
          >
            -
          </button>
          <button
            onClick={() => {
              deleteOrder(name);
            }}
            className="btn btn-danger "
          >
            <i className="material-icons">delete</i>
          </button>
        </div>
      </th>
    </tr>
  );
}

export default BasketListItem;
