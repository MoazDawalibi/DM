import { useTranslation } from 'react-i18next';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import CurrentOrderTab from './CurrentOrderTab';
import DeliveredOrderTab from './DeliveredOrderTab';
import CanceledOrderTab from './CanceledOrderTab';
import ReyurnedOrderTab from './ReyurnedOrderTab';
import EmptyOrder from './EmptyOrder';

const OrderTabs = () => {
    const {t} = useTranslation();
    const items: TabsProps['items'] = [
        {
          key: '1',
          label: <h6 className='order_tab_title'>{t("Current")} </h6>,
          children: <DeliveredOrderTab/>,
        },
        // {
        //     key: '2',
        //     label: <h6 className='order_tab_title'>{t("Order With Status")} <span>0</span></h6>,
        //     children: <DeliveredOrderTab/>,
        // },
        // {
        //     key: '3',
        //     label: <h6 className='order_tab_title'>{t("Canceled")} <span>0</span></h6>,
        //     children: <CanceledOrderTab/>,
        // },
        // {
        //     key: '4',
        //     label: <h6 className='order_tab_title'>{t("Reyurned")} <span>0</span></h6>,
        //     children: <ReyurnedOrderTab/>,
        // },
      ];
  return (
    <>
        <Tabs defaultActiveKey="1" items={items} />;
    </>
)
}

export default OrderTabs