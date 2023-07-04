import { CheckCircleOutlined } from "@ant-design/icons";
import { Button, notification, Space, Typography } from "antd";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../utils/api";
import { cartActionType, CartContextType, DishWithQty} from "../../utils/type";

const PopDesc = ({ oid }: { oid: number }) => {
  return (
    <>
      <p>
        Order with Id : <Typography.Text strong>{oid}</Typography.Text> is
        confirmed
      </p>
      <p>
        Time Require : <Typography.Text strong>15 - 20 mins</Typography.Text>
      </p>
    </>
  );
};

const CartDrawerFooter = () => {
  const [api, contextHolder] = notification.useNotification();
  const { state,dispatch } = useContext(CartContext) as CartContextType;

  const clearCart = () => dispatch({type:cartActionType.EMPTY,payload:{} as DishWithQty});

  const handleClick = async () => {
    const { items } = state;
    const orderContent = items.map((ele: DishWithQty) => ({
      dishId: ele.id,
      qty: ele.qty,
    }));
    const oid = await createOrder({ cid: 1, orderContent });
    api["success"]({
      message: "Order Confirmation",
      description: <PopDesc oid={oid} />,
      placement: "topLeft",
    });
    clearCart();
  };

  return (
    <>
      {contextHolder}
      {state.items.length > 0 && <Space
        align="center"
        style={{ width: "100%", justifyContent: "flex-end" }}
      >
        <Button onClick={clearCart}>Clear Cart</Button>
        <Button
          type="primary"
          icon={<CheckCircleOutlined />}
          style={{ width: "190px" }}
          onClick={handleClick}
        >
          Place Order
        </Button>
      </Space>}
    </>
  );
};

export default CartDrawerFooter;
