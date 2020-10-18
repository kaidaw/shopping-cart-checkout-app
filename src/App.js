import React from "react";
import "./App.css";
import { Homepage } from "./homepage.js";
import { Cart } from "./cart.js";
import { Product } from "./product.js";

let database = [
  {
    name: "Strong potion",
    price: "250.00",
    stock: 2,
  },
  {
    name: "Stronger potion",
    price: "500.00",
    stock: 1,
  },
  {
    name: "Weak potion",
    price: "3.50",
    stock: 25,
  },
  {
    name: "Traveller potion",
    price: "1.99",
    stock: 9999999999999,
  },
  {
    name: "GOD potion",
    price: "1000000000.00",
    stock: 0,
  },
];

function WhichPage({
  inventory,
  setInventory,
  page,
  setPage,
  activeproduct,
  setActiveproductid,
  cart,
  setCart,
  changeCart,
}) {
  if (page === "homepage") {
    return (
      <Homepage
        changeCart={changeCart}
        activeproduct={activeproduct}
        setActiveproductid={setActiveproductid}
        setPage={setPage}
        inventory={inventory}
        setInventory={setInventory}
        cart={cart}
        setCart={setCart}
      ></Homepage>
    );
  }
  if (page === "cart") {
    return (
      <Cart
        cart={cart}
        setCart={setCart}
        changeCart={changeCart}
        inventory={inventory}
      ></Cart>
    );
  }
  if (page === "activeproduct") {
    return (
      <Product
        changeCart={changeCart}
        cart={cart}
        setCart={setCart}
        activeproduct={activeproduct}
        setActiveproductid={setActiveproductid}
      />
    );
  }
}

function App() {
  const [activeproductid, setActiveproductid] = React.useState(null);
  const [page, setPage] = React.useState("homepage");
  const [cart, setCart] = React.useState([]);
  const [inventory, setInventory] = React.useState(
    database.map((prod) => {
      return { ...prod, id: Math.random().toString() };
    })
  );
  const activeproduct = inventory.find((product) => {
    return product.id === activeproductid;
  });
  function changeCart(current, add) {
    setInventory(
      inventory.map((item) => {
        if (item !== current) {
          return item;
        }
        if (add) {
          return { ...item, stock: item.stock - 1 };
        }
        return { ...item, stock: item.stock + 1 };
      })
    );
    if (add) {
      setCart([...cart, { id: current.id }]);
    } else {
      setCart(
        cart.filter((item) => {
          if (item.id !== current.id) {
            return true;
          }
          return false;
        })
      );
    }
  }
  return (
    <div className="App">
      <button
        onClick={() => {
          setPage("homepage");
        }}
      >
        HOMEPAGE
      </button>
      <button
        onClick={() => {
          setPage("cart");
        }}
      >
        CART
      </button>
      <WhichPage
        changeCart={changeCart}
        inventory={inventory}
        setInventory={setInventory}
        activeproduct={activeproduct}
        setActiveproductid={setActiveproductid}
        setPage={setPage}
        page={page}
        cart={cart}
        setCart={setCart}
      ></WhichPage>
    </div>
  );
}

export default App;
