import { Radio, RadioChangeEvent } from "antd";
import { useContext, useState } from "react";
import { DishContext } from "../context/DishContext";
import { DishContextType } from "../utils/type";

const TypeFilter = () => {
  const [currFilt,setcurrFilt] = useState<any>('all');
  const {updateQry} = useContext(DishContext) as DishContextType;
  const handleChange = (e:RadioChangeEvent) => {
    const {value} = e.target;
    setcurrFilt(value);
    updateQry(value,'cat');
    // updateQry('all','menu');
  }

  const handleChangeMenu = (e:RadioChangeEvent) => {
    const {value} = e.target;
    updateQry(value,'menu');
  }

  const SnacksFilter = () => {
    return(<>
      <Radio.Button value="all">All</Radio.Button>
      <Radio.Button value="Burger">Burger</Radio.Button>
      <Radio.Button value="Pizza">Pizza</Radio.Button>
    </>)
  }
  
  const DLFilter = () => {
    return(<>
      <Radio.Button value="all">All</Radio.Button>
      <Radio.Button value="MainCourse">Main Course</Radio.Button>
      <Radio.Button value="Rice">Rice</Radio.Button>
    </>)
  }

  return (
    <>
    <Radio.Group defaultValue="all" buttonStyle="solid" onChange={handleChange}>
      <Radio.Button value="all">All</Radio.Button>
      <Radio.Button value="Snacks">Snacks</Radio.Button>
      <Radio.Button value="Dinner">Dinner</Radio.Button>
      <Radio.Button value="Launch">Launch</Radio.Button>
    </Radio.Group>
    <Radio.Group defaultValue="all" buttonStyle="solid" onChange={handleChangeMenu}>
      {currFilt === 'Snacks' && <SnacksFilter />}
      {(currFilt === 'Dinner' || currFilt == 'Launch') && <DLFilter />}
    </Radio.Group>
    </>
  );
};




export default TypeFilter;
