// context/todoContext.tsx

import { useState,useEffect,createContext } from "react";
import { getAllDishes } from "../utils/api";
import { Dish, DishContextType } from "../utils/type";

export const DishContext = createContext<DishContextType | null>(
  null
);

const DishProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [dishes, setDishes] = useState<Dish[] | undefined>();
  const [qry,setQry] = useState({cat:'all',men:'all'});
  const updateDishes = (data:Dish[] | undefined) => setDishes(data);
  const updateQry = (q:string,type:string) => {
    if(type === 'menu') setQry({...qry,men:q})
    else setQry({...qry,cat:q})
  }
  useEffect(() => {
    getAllDishes(qry).then((data: Dish[] | undefined) => updateDishes(data));
  },[qry])
  return (
    <DishContext.Provider value={{ updateDishes,dishes,updateQry }}>
      {children}
    </DishContext.Provider>
  );
};

export default DishProvider;
