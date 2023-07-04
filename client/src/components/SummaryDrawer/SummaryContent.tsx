import { Space, Typography } from "antd";
import { FC } from "react";

type Props = {
    name:string | undefined;
    price:string | undefined;
    qty:number;
}

const SummaryContent:FC<Props> = ({name='temp',price,qty}) => {
  return (
    <Space
      style={{ width: "100%", justifyContent: "space-between" }}
      key={name + qty}
    >
      <Typography.Text>{name}</Typography.Text>
      <Typography.Text>{`${price} x ${qty}`}</Typography.Text>
      <Typography.Text strong>{`$${Number(price) * qty}`}</Typography.Text>
    </Space>
  );
};

export default SummaryContent;
