import { Divider, List } from "antd";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartContextType } from "../../utils/type";
import CartDrawerFooter from "./CartDrawerFooter";
import CartDrawerHeader from "./CartDrawerHeader";
import CartDrawerListItem from "./CartDrawerItem";

const CartDrawer = () => {
  const { state } = useContext(CartContext) as CartContextType;
  return (
    <>
      <CartDrawerHeader />
      <Divider dashed orientation="left">
        Menu
      </Divider>
      <List
        size="large"
        itemLayout="vertical"
        dataSource={state.items}
        renderItem={(item: any) => <CartDrawerListItem item={item} />}
      />
      <Divider dashed orientation="right">{`Total $${state.price}`}</Divider>
      <CartDrawerFooter />
    </>
  );
};

export default CartDrawer;
