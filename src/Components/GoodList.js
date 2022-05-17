import React from "react";
import GoodListItem from "./GoodListItem";

function GoodList(props) {
  const { goods, handleCart } = props;

  return (
    <div className="goods">
      {goods.map((good) => (
        <GoodListItem
          handleCart={() => {
            handleCart(good);
          }}
          key={good.id}
          {...good}
        />
      ))}
    </div>
  );
}

export default GoodList;
