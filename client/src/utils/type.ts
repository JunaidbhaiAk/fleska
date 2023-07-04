export type Category = {
  name: string;
};

export type Dish = {
  desc: string;
  id: number;
  img: string;
  name: string;
  price: string;
  Categories: Category[];
};

export interface DishWithQty extends Dish {
  qty: number;
}

export type DishContextType = {
  dishes: Dish[] | undefined;
  updateDishes: (data: Dish[]) => void;
  updateQry: (q: string) => void;
};

export enum cartActionType {
  ADD = "ADD",
  REMOVE = "REMOVE",
  EMPTY = "EMPTY",
}

export type cartAction = {
  type: cartActionType;
  payload: Dish;
};

export type cartStateType = {
  items: DishWithQty[] | [];
  price: number;
};

export type CartContextType = {
  state: cartStateType;
  dispatch: React.Dispatch<cartAction>;
};

export type OrderContentType = {
  dishId:number,
  qty:number,
}
export type OrderReqType = {
  cid:number;
  orderContent:OrderContentType[]
}


export type ClientOrderResType = {
  id:number;
  createdAt: string;
}
