import { Collapse, Divider } from "antd";
import { Dish } from "../../utils/type";
import SummaryContent from "./SummaryContent";
import SummaryTotal from "./SummaryTotal";
import useClientOrder from "../../hooks/useClientOrder";
import useSummaryOrder from "../../hooks/useSummaryOrder";

export const SummaryItem = ({ id, date }: { id: number; date: string }) => {
  const [currItem] = useSummaryOrder(id);
  let total = 0;
  return (
    <>
      {currItem?.map(({ qty, Dish }: { qty: number; Dish: Partial<Dish> }) => {
        total += Number(Dish.price) * qty;
        return <SummaryContent name={Dish.name} price={Dish.price} qty={qty} />;
      })}
      <Divider dashed />
      <SummaryTotal total={total} date={date} />
    </>
  );
};

const SummaryDrawer = () => {
  const [orders] = useClientOrder(1);
  return <Collapse items={orders} />;
};

export default SummaryDrawer;
