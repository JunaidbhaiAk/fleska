import { HomeOutlined, PhoneOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

const CartDrawerHeader = () => {
  return (
    <Space
      style={{ width: "100%", justifyContent: "space-between" }}
      align="center"
    >
      <Input
        type="text"
        defaultValue="St Road, New York"
        prefix={<HomeOutlined />}
        size="large"
      />
      <Input
        type="text"
        defaultValue="202-404-986"
        prefix={<PhoneOutlined />}
        size="large"
      />
    </Space>
  );
};

export default CartDrawerHeader;
