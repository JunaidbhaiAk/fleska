
import { Avatar, Button, Checkbox, Divider, Input, List, Space,Typography } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { DishContext } from "../../context/DishContext";
import { cartActionType, CartContextType, DishContextType } from "../../utils/type";

const CartDrawerListitm = (props:any) => {
  
  const { item,idx } = props;
  return (
    <List.Item key={item.id} extra={<IteamExtra itm={item}/>}>
      <List.Item.Meta
        avatar={
          <Avatar
            src={item.img.replace(/imgs/, "images")}
            size={80}
            shape="square"
          />
        }
        title={`${item.name} - ${item.selectedSize.size}`}
        description={<Desc desc={item.desc} idx={idx} id={item.id} sizeId={item.selectedSize.id}/>}
      />
    </List.Item>
  );
};

const Desc = (props:any) => {
  const {sizeId,id} = props;
  const {dispatch} = useContext(CartContext) as CartContextType;
  const {dishes} = useContext(DishContext) as DishContextType
  const currstateItem = dishes?.find((ele) => ele.id === id)
  const handleChange = (e:CheckboxChangeEvent) => {
    const {value,checked} = e.target;
    const payload = {sc:value,selectedSizeId:sizeId,id}
    if(checked) dispatch({type:cartActionType.ADDSPECIALCONTENT,payload});
    else dispatch({type:cartActionType.REMOVESPECIALCONTENT,payload});
  }
  
  return (
    <>
    {props.desc}
    <Divider dashed/>
    <Checkbox.Group style={{ width: '100%' }}>
      {currstateItem?.SpecialContents.map((ele) => {
        return (<Checkbox value={ele} onChange={handleChange}>{`${ele.name} - ${ele.price}`}</Checkbox>)
      })}
    </Checkbox.Group>
    </>
  )
}

const IteamExtra = (props:any) => {
  const {state} = useContext(CartContext) as CartContextType
  const {dispatch} = useContext(CartContext) as CartContextType
  const {itm} = props;
  const currstateItem = state.items.find((ele) => ele.id === itm.id && ele.selectedSize === itm.selectedSize)
  const incr = () => {
    dispatch({type:cartActionType.ADD,payload:itm})
  }
  const decr = () => {
    const payload = {id:itm.id,selectedSize:itm.selectedSize}
    dispatch({type:cartActionType.REMOVE,payload})
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
        {currstateItem?.SpecialContents.map((e) => {
          return <span>{`${e.name} - +$${e.price}`}</span>
        })}
        <Typography.Title level={4}>{`$${Number(itm.selectedSize.price) * itm.qty}`}</Typography.Title>
    </Space>
  );
};

export default CartDrawerListitm;
