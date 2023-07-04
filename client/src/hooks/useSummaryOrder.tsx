import { useEffect, useState } from "react";
import { getOrderById } from "../utils/api";

const useSummaryOrder = (id: number) => {
  const [currItem, setcurrItem] = useState([]);
  useEffect(() => {
    getOrderById(id).then((data) => setcurrItem(data));
  }, []);
  return [currItem];
};

export default useSummaryOrder;
