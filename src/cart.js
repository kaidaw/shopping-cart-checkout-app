import React from "react";

export function Cart({ cart, changeCart, inventory }) {
  return cart.map((entry) => {
    const item = inventory.find((invitem) => {
      return invitem.id === entry.id;
    });
    return (
      <div>
        <div>{item.name}</div>
        <div>${item.price}</div>
        <button
          onClick={() => {
            changeCart(item, false);
          }}
        >
          {" "}
          {item.name !== "Strong potion"
            ? `Remove ${item.name} from cart`
            : "This potion is too strong for you traveler"}
        </button>
      </div>
    );
  });
}
