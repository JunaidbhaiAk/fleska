import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, message, Radio, RadioChangeEvent, Select, Space } from "antd";
import Meta from "antd/es/card/Meta";
import { FC, useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { cartActionType, CartContextType, Dish } from "../utils/type";

type Props = {
    ele: Dish
}

const DishCard: FC<Props> = ({ele}) => {
  const [selectedSize,setselectedSize] = useState(null);
  const { img, desc, name,Sizes } = ele;
  const { dispatch } = useContext(CartContext) as CartContextType;
  const handleChange = (e: RadioChangeEvent) => {
    const {value} = e.target;
    setselectedSize(value);
  };
  const handleClick = (item: any) => {
    if(selectedSize){
        const payload = {id:item.id,name:item.name,img:item.img,desc:item.desc,selectedSize,SpecialContents:[],qty:1}
        dispatch({ type: cartActionType.ADD, payload });
    }
    else message.error('Please Select The Size')
  };

  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt="example" src={img.replace(/imgs/, "images")} />}
    >
      <Meta title={name} description={desc} />
      <Space
        style={{
          width: "100%",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        {/* <Typography.Title level={5}>{"$" + price}</Typography.Title> */}
        <Radio.Group onChange={handleChange}>
          <Space direction="vertical">
            {Sizes.map((e:any) => {
                return <Radio value={e} key={e.id} onChange={handleChange}>{e.size}</Radio>;
            })}
          </Space>
        </Radio.Group>
        <Button
          type="primary"
          onClick={() => handleClick(ele)}
          icon={<PlusOutlined />}
          size="small"
        >
          Add To Cart
        </Button>
      </Space>
    </Card>
  );
};

export default DishCard;
