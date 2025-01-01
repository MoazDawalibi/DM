import { Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useGetOrder } from '../../../../../api/order';
import { LocalStorageEnum } from '../../../../../api/utils/LocalStorage';
import EmptyOrder from './EmptyOrder';

interface DataType {
    id: string;
    order_code: string;
    order_total: number;
    placed_on: string;
    order_status: string;
    sent_to:string
}

const OrdersTable = () => {
    const navigate = useNavigate()
    const [t] = useTranslation()
    const id = JSON.parse(localStorage.getItem(LocalStorageEnum?.USER_KEY) ?? '')?.id

    const {data,isLoading} = useGetOrder({
        user_id:id
    })
    const orders = data?.Orders || []
    
    const columns: TableProps<DataType>['columns'] = [
        {
            title: t('order code'),
            dataIndex: 'id',
            key: 'id',
            render: (text) => <a>{text}</a>,
        },
        {
            title: t('total'),
            dataIndex: 'total',
            key: 'total',
        },
        {
            title: t('coupon'),
            dataIndex: 'coupon',
            key: 'coupon',
        },
        {
            title: t('state'),
            dataIndex: 'state',
            key: 'state',
        },
       
    ];

    return (
        orders?.length > 0 ?
        <Table
        onRow={(record, rowIndex) => {
            return {
                onClick: (event) => {
                    navigate('/single_order?order_id=' + record?.id)
                },
            };
        }}
        columns={columns}
        dataSource={orders || []}
        loading={isLoading}
        />
        
        : 
        <EmptyOrder/>
    )
};

export default OrdersTable;
