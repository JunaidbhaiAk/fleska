import { cartAction, cartActionType, cartStateType, Dish } from "./type";

export const cartReducer = (state: cartStateType, action: cartAction) => {
    const { type, payload } = action;
    switch (type) {
      case cartActionType.ADD: {
        const itemIdx = state.items.findIndex(
          (ele: Dish) => ele.id === payload?.id
        );
        const newItems = state.items;
        if (itemIdx === -1) {
          return {
            ...state,
            items: [...newItems, {...payload,qty:1}],
            price: state.price + Number(payload?.price),
          };
        } else {
          newItems[itemIdx].qty += 1;
          return {
            ...state,
            items: newItems,
            price: state.price + Number(payload?.price),
          };
        }
      }
      case cartActionType.REMOVE: {
        const itemIdx = state.items.findIndex(
          (ele: Dish) => ele.id === payload?.id
        );
        if (state.items[itemIdx].qty === 1) {
          const removedItem = state.items.filter(
            (ele: Dish) => ele.id !== payload?.id
          );
          return {
            ...state,
            items: removedItem,
            price: state.price - Number(payload?.price),
          };
        } else {
          const newItems = state.items;
          newItems[itemIdx].qty -= 1;
          return {
            ...state,
            items: newItems,
            price: state.price - Number(payload?.price),
          };
        }
      }
      case cartActionType.EMPTY: {
        return {...state,items:[],price:0}
      }
    }
};
