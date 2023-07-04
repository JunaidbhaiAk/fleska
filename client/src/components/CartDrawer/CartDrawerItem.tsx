import { DollarOutlined } from "@ant-design/icons";
import { Avatar, Button, Divider, Input, List, Space,Typography } from "antd";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { cartActionType, CartContextType } from "../../utils/type";

const CartDrawerListItem = (props:any) => {
  const {state} = useContext(CartContext) as CartContextType
  const { item } = props;
  return (
    <List.Item key={item.id} extra={<ItemExtra itm={item}/>}>
      <List.Item.Meta
        avatar={
          <Avatar
            src={item.img.replace(/imgs/, "images")}
            size={80}
            shape="square"
          />
        }
        title={item.name}
        description={item.desc}
      />
    </List.Item>
  );
};

const ItemExtra = (props:any) => {
  const {itm} = props;
  const {dispatch} = useContext(CartContext) as CartContextType
  const incr = () => {
    dispatch({type:cartActionType.ADD,payload:itm})
  }
  const decr = () => {
    dispatch({type:cartActionType.REMOVE,payload:itm})
  }
  return (
    <Space direction="vertical" align="center">
        <Space style={{marginBottom:'20px'}}>
        <Button type="primary" size="small" onClick={decr}>
            -
        </Button>
        <span>{itm.qty}</span>
        <Button type="primary" size="small" onClick={incr}>
            +
        </Button>
        </Space>
        <Typography.Title level={4}>{`$${Number(itm.price) * itm.qty}`}</Typography.Title>
    </Space>
  );
};

export default CartDrawerListItem;
