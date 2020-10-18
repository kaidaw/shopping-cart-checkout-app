import React from "react";

export function Product({
  inventory,
  setInventory,
  activeproduct,
  cart,
  setCart,
  changeCart,
}) {
  return (
    <div>
      <div>{activeproduct.name}</div>
      <div>${activeproduct.price}</div>
      <div>
        {activeproduct.stock
          ? activeproduct.stock
          : "This item is unavailable. Learn to read."}
      </div>
      Stock:{" "}
      {activeproduct.stock ? (
        <button
          onClick={() => {
            changeCart(activeproduct, true);
            setCart([...cart, activeproduct]);
          }}
        >
          ADD TO CART
        </button>
      ) : (
        "out of stock."
      )}
    </div>
  );
}
