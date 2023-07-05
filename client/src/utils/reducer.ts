import { cartAction, cartActionType, cartStateType, SpecialContents } from "./type";

export const cartReducer = (state: cartStateType, action: cartAction) => {
  const { type, payload } = action;
  switch (type) {
    case cartActionType.ADD: {
      const itemIdx = state.items.findIndex(
        (ele: any) =>
          ele.id === payload?.id &&
          ele.selectedSize.id === payload.selectedSize.id
      );
      const newItems = state.items;
      if (itemIdx === -1) {
        return {
          ...state,
          items: [...newItems, { ...payload, qty: 1 }],
          price: state.price + Number(payload.selectedSize.price),
        };
      } else {
        newItems[itemIdx].qty += 1;
        return {
          ...state,
          items: newItems,
          price: state.price + Number(payload.selectedSize.price),
        };
      }
    }
    case cartActionType.REMOVE: {
      const itemIdx = state.items.findIndex(
        (ele: any) => ele.id === payload?.id && ele.selectedSize.id === payload.selectedSize.id
      );
      if (state.items[itemIdx].qty === 1) {
        const removedItem = state.items.filter(
          (ele: any) => ele.id === payload?.id && ele.selectedSize.id !== payload.selectedSize.id
        );
        return {
          ...state,
          items: removedItem,
          price: state.price - Number(payload.selectedSize.price),
        };
      } else {
        const newItems = state.items;
        newItems[itemIdx].qty -= 1;
        return {
          ...state,
          items: newItems,
          price: state.price - Number(payload.selectedSize.price),
        };
      }
    }
    case cartActionType.EMPTY: {
      return { ...state, items: [], price: 0 };
    }
    case cartActionType.ADDSPECIALCONTENT : {
      const itemIdx = state.items.findIndex(
        (ele: any) => ele.id === payload?.id && ele.selectedSize.id === payload.selectedSizeId
      );
      const newItems = state.items;
      newItems[itemIdx].SpecialContents.push(payload.sc);
      return {...state,items:newItems,price:state.price + payload.sc.price}
    }
    case cartActionType.REMOVESPECIALCONTENT : {
      const itemIdx = state.items.findIndex(
        (ele: any) => ele.id === payload?.id && ele.selectedSize.id === payload.selectedSizeId
      );
      const newItems = state.items;
      newItems[itemIdx].SpecialContents = newItems[itemIdx].SpecialContents.filter((ele) => ele.id !== payload.sc.id)
      return {...state,items:newItems,price:state.price - payload.sc.price}
    }
  }
};
