import { Space, Typography } from "antd";
import { FC } from "react";

type Props = {
    name:string | undefined;
    price:string | undefined;
    qty:number;
    sc:any;
    scTotal:number;
}

const SummaryContent:FC<Props> = ({name='temp',price,qty,sc,scTotal}) => {

  return (
    <Space
      style={{ width: "100%", justifyContent: "space-between" }}
      key={name + qty}
    >
      <Typography.Text>{name}</Typography.Text>
      <Typography.Text>{`${price} x ${qty}`}</Typography.Text>
      <Space direction="vertical">
      {sc.map((ele:any) => <Typography.Text>{`${ele.name} - $${ele.price}`}</Typography.Text>)}
      </Space>
      <Typography.Text strong>{`$${(Number(price) + scTotal) * qty}`}</Typography.Text>
    </Space>
  );
};

export default SummaryContent;
