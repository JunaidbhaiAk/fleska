import { createContext, useReducer} from "react";
import { cartReducer } from "../utils/reducer";
import { cartAction, cartStateType } from "../utils/type";


type CartContextType = {
  state: cartStateType;
  dispatch: React.Dispatch<cartAction>;
};

export const CartContext = createContext<CartContextType | null>(null);

const CartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const initialCart: cartStateType = { items: [],price:0 };
  const [state, dispatch] = useReducer(cartReducer, initialCart);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
