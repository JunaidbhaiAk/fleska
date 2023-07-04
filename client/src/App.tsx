import { useState } from "react";
import Navbar from "./components/Navbar";
import { Button, Drawer, Layout, Space, Typography } from "antd";
import Menu from "./components/Menu";
import CartDrawer from "./components/CartDrawer/CartDrawer";
import TypeFilter from "./components/TypeFIlter";
import SummaryDrawer from "./components/SummaryDrawer/SummaryDrawer";
const { Content } = Layout;
const { Title } = Typography;
function App() {
  
  const [currComponent,setcurrComponent] = useState<string>('order')
  const [openDrawer, setopenDrawer] = useState<boolean>(false);

  const handleOpen = (type:string) => {
    setopenDrawer(true);
    setcurrComponent(type);
  }
  const handleClose = () => {
    setopenDrawer(false);
  }

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Navbar handleOpen={handleOpen} />
      <Content>
        <Space style={{width:'100%',justifyContent:'space-between'}}>
          <Title level={4}>Welcome, User</Title>
          <Button type='primary' onClick={() => handleOpen('summary')}>Order Summaries</Button>
        </Space>
        <div>
          <Title level={5}>Menu</Title>
          <TypeFilter />
          <Menu />
        </div>
        
        <Drawer title={currComponent === 'order' ? 'My Cart' : "Previous Orders"} placement="right" open={openDrawer} onClose={handleClose} width={600}>
         {currComponent === 'order' ? <CartDrawer /> : <SummaryDrawer />}
        </Drawer>
      </Content>
    </div>
  );
}

export default App;
