import { Space, Typography } from 'antd';
import { FC } from 'react'

type Props = {
    date:string;
    total:number;
}
const SummaryTotal:FC<Props> = ({date,total}) => {
  return (
    <Space style={{ width: "100%", justifyContent: "space-between" }}>
        <Typography.Text strong>{`Date Ordered - ${date}`}</Typography.Text>
        <Typography.Text strong>{`Total - $${total}`}</Typography.Text>
    </Space>
  )
}

export default SummaryTotal