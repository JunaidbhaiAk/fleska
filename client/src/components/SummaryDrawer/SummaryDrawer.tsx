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
      {currItem?.map(({ qty, Dish,Sizes,SpecialContents }: { qty: number; Dish: Partial<Dish>,Sizes:any,SpecialContents:any }) => {
        const scTotal = SpecialContents.reduce((curr:any,pre:any) => curr + pre.price,0);
        total += (scTotal + Number(Sizes[0].price)) * qty;
        return <SummaryContent name={`${Dish.name} - ${Sizes[0].size}`} price={Sizes[0].price} qty={qty} sc={SpecialContents} scTotal={scTotal}/>;
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
