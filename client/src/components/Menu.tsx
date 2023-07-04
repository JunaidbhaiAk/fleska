import { useContext } from "react";
import { Row, Col, Card,Typography, Button, Space } from "antd";
import { DishContext } from "../context/DishContext";
import { cartActionType, CartContextType, Dish, DishContextType } from "../utils/type";
import { CartContext } from "../context/CartContext";
import { PlusOutlined } from "@ant-design/icons";
const { Meta } = Card;
const Menu = () => {
  const {dishes} = useContext(DishContext) as DishContextType;
  const {dispatch} = useContext(CartContext) as CartContextType

  const handleClick = (item:Dish) => {
    dispatch({type:cartActionType.ADD,payload:item})
  }

  return (
    <div style={{margin:'25px 0'}}>
    <Row gutter={[16, 16]}>
      {dishes?.map((ele:Dish) => {
        const {id,name,desc,price,img} = ele;
        return (
          <Col key={id} xxl={{span:6}} xl={{span:8}} lg={{span:12}} md={{span:12}} sm={{span:24}} xs={{span:24}} >
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src={img.replace(/imgs/,'images')}
                />
              }
            >
              <Meta title={name} description={desc} />
              <Space style={{width:'100%',justifyContent:'space-between',marginTop:'20px'}}>
                <Typography.Title level={5}>{'$' + price}</Typography.Title>
                <Button type='primary' onClick={() => handleClick(ele)} icon={<PlusOutlined />} size='small'>Add To Cart</Button>
              </Space>
            </Card>
          </Col>
        );
      })}
    </Row>
    </div>
  );
};

export default Menu;
