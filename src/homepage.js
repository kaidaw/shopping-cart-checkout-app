import React from "react";

export function Homepage({
  inventory,
  setPage,
  activeproduct,
  setActiveproductid,
  cart,
  setCart,
  setInventory,
  changeCart,
}) {
  return inventory.map((entry) => {
    return (
      <div>
        <div>_________________________________________</div>
        <div
          onClick={() => {
            setPage("activeproduct");
            setActiveproductid(entry.id);
          }}
        >
          <div>{entry.name}</div>
          <div>${entry.price}</div>
          <div>
            Stock:
            {entry.stock ? entry.stock : `out of stock please try again later`}
          </div>
        </div>
        {entry.stock ? (
          <button
            onClick={() => {
              changeCart(entry, true);
            }}
          >
            ADD TO CART
          </button>
        ) : null}
      </div>
    );
  });
}
