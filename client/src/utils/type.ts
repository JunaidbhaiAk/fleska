export type Category = {
  name: string;
};

export type Size = {
  id:number;
  size:string;
  price:number;
}

export type SpecialContents = {
  id:number
  name:string;
  price:number;
}

export type Dish = {
  desc: string;
  id: number;
  img: string;
  name: string;
  price: string;
  Categories: Category[];
  Sizes:Size[]
  SpecialContents:SpecialContents[]
};

export interface DishWithQty extends Dish {
  qty: number;
}

export type DishContextType = {
  dishes: Dish[] | undefined;
  updateDishes: (data: Dish[]) => void;
  updateQry: (q: string,type:string) => void;
};

export enum cartActionType {
  ADD = "ADD",
  REMOVE = "REMOVE",
  EMPTY = "EMPTY",
  ADDSPECIALCONTENT = "ADDSPECIALCONTENT",
  REMOVESPECIALCONTENT = "REMOVESPECIALCONTENT"
}

export type customPayloadType = {
  id:number,
  name:string,
  img:string,
  desc:string,
  selectedSize:Size,
  SpecialContents:SpecialContents[]
  qty:number,
}

export type cartAction = {
  type: cartActionType;
  payload: any;
};

export type cartStateType = {
  items: customPayloadType[] | [];
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
