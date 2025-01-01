import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { useTranslation } from 'react-i18next';
import ProductDescription from './ProductDescription';
import ProductInfo from './ProductInfo';
import ProductAdditionalInfo from './ProductAdditionalInfo';

const ProductTabs = ({data}:any) => {

    const {t} = useTranslation();
    
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: t('product_info'),
            children: <ProductInfo data={data}/>,
        },
        {
          key: '2',
          label: t('description'),
          children: <ProductDescription data={data}/>,
        },
        {
            key: '3',
            label: t('additional information'),
            children: <ProductAdditionalInfo data={data}/>,
        },
      ];
      
  return (
    <Tabs className='product_tabs' defaultActiveKey="1" items={items}  />
    )
}

export default ProductTabs