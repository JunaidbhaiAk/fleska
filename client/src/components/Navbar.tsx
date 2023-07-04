import {Space,Button, Badge} from 'antd'
import {ShoppingCartOutlined} from '@ant-design/icons'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react';
import { CartContextType } from '../utils/type';

type Props = {
  handleOpen: (type:string) => void;
}

const Navbar:React.FC<Props> = ({handleOpen}) => {
  const {state} = useContext(CartContext) as CartContextType;
  return (
    <Space style={{width:'100%',padding:'12px 8px',justifyContent:'space-between'}} align='center'>
      <img src='https://eyytuumehsi.exactdn.com/wp-content/uploads/sites/2/2023/01/fleksa-logo.png' style={{width:'120px'}}/>
      <Badge count={state.items.length} color='Red'>
        <Button type='primary' icon={<ShoppingCartOutlined />} size='large' style={{background:'black'}} onClick={() => handleOpen('order')}/>
      </Badge>
    </Space>
  )
}

export default Navbar