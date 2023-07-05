import { useContext } from "react";
import { Row, Col, Card,Typography, Button, Space } from "antd";
import { DishContext } from "../context/DishContext";
import { Dish, DishContextType } from "../utils/type";
import DishCard from "./DishCard";

const Menu = () => {
  const {dishes} = useContext(DishContext) as DishContextType;
  console.log(dishes);
  
  return (
    <div style={{margin:'25px 0'}}>
    <Row gutter={[16, 16]}>
      {dishes?.map((ele:Dish) => {
        return (
          <Col key={ele.id} xxl={{span:6}} xl={{span:8}} lg={{span:12}} md={{span:12}} sm={{span:24}} xs={{span:24}} >
            <DishCard ele={ele}/>
          </Col>
        );
      })}
    </Row>
    </div>
  );
};

export default Menu;
