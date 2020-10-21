import React from "react";

export function Cart({ setInventory, cart, changeCart, inventory, setCart }) {
  return cart.map((entry) => {
    const itemInInventory = inventory.find((invitem) => {
      return invitem.id === entry.id;
    });

    return (
      <div>
        <div>{itemInInventory.name}</div>
        <div>${itemInInventory.price}</div>
        <button
          onClick={() => {
            changeCart(itemInInventory, false);
          }}
        >
          {" "}
          {itemInInventory.name !== "Strong potion"
            ? `Remove ${itemInInventory.name} from cart`
            : "This potion is too strong for you  traveler"}
        </button>
        <button
          onClick={() => {
            setCart(
              cart.filter((cartItem) => {
                if (itemInInventory.id !== cartItem.id) {
                  return true;
                }

                // setInventory([
                //   ...inventory,
                //   { stock: itemInInventory.stock + clickedCartItem.quantity },
                // ]);
                return false;
              })
            );
            setInventory(
              inventory.map((inventoryItem) => {
                if (itemInInventory.id !== inventoryItem.id) {
                  return inventoryItem;
                } else {
                  return {
                    ...inventoryItem,
                    stock: itemInInventory.stock + entry.quantity,
                  };
                }
              })
            );
          }}
        >
          REMOVE ALL
        </button>
        <button>{entry.quantity}</button>
      </div>
    );
  });
}
