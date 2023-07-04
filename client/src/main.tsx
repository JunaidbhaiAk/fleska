import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ConfigProvider } from "antd";
import "./index.css";
import DishProvider from "./context/DishContext";
import CartProvider from "./context/CartContext";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#000000",
      },
    }}
  >
    <DishProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </DishProvider>
  </ConfigProvider>
);
