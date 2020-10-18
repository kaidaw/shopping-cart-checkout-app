import React from "react";

export function Cart({ cart, setCart, addToCart }) {
  return cart.map((entry, index) => {
    return (
      <div>
        <div>{entry.name}</div>
        <div>${entry.price}</div>
        <button
          onClick={() => {
            addToCart(entry, false);
            setCart(
              cart.filter((item, i) => {
                return i !== index;
              })
            );
          }}
        >
          {" "}
          {entry.name !== "Strong potion"
            ? `Remove ${entry.name} from cart`
            : "This potion is too strong for you traveler"}
        </button>
      </div>
    );
  });
}
