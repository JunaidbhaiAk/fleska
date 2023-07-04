import { useEffect, useState } from "react";
import { SummaryItem } from "../components/SummaryDrawer/SummaryDrawer";
import { getClientOrders } from "../utils/api";
import { ClientOrderResType } from "../utils/type";

const useClientOrder = (id:number) => {
  const [orders, setorders] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getClientOrders(id);
      const items = data.map((ele: ClientOrderResType) => {
        return {
          key: ele.id,
          label: `Order #${ele.id}`,
          children: <SummaryItem id={ele.id} date={ele.createdAt} />,
        };
      });
      setorders(items);
    })();
  }, []);
  return [orders];
};

export default useClientOrder;
