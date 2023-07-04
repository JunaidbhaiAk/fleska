import { Radio, RadioChangeEvent } from "antd";
import { useContext } from "react";
import { DishContext } from "../context/DishContext";
import { DishContextType } from "../utils/type";

const TypeFilter = () => {
  const {updateQry} = useContext(DishContext) as DishContextType;
  const handleChange = (e:RadioChangeEvent) => {
    const {value} = e.target;
    updateQry(value);
  }
  return (
    <Radio.Group defaultValue="all" buttonStyle="solid" onChange={handleChange}>
      <Radio.Button value="all">All</Radio.Button>
      <Radio.Button value="Snacks">Snacks</Radio.Button>
      <Radio.Button value="Dinner">Dinner</Radio.Button>
      <Radio.Button value="Launch">Launch</Radio.Button>
    </Radio.Group>
  );
};

export default TypeFilter;
