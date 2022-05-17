import React from "react";

function GoodListItem({ handleCart, description, price, full_background }) {
  return (
    <div className="card justify-content-between">
      <div className="card-image">
        <img src={full_background} alt="bg" />
      </div>
      <div className="card-content">
        <p>{description}</p>
      </div>
      <div className="card-action d-flex align-items-center justify-content-between">
        <button onClick={handleCart} className="btn">
          Buy
        </button>
        <span style={{ fontSize: "1.5rem" }}>{price}$</span>
      </div>
    </div>
  );
}

export default GoodListItem;
