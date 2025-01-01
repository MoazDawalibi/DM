import React from 'react'
import SettingTabHeader from '../SettingTabHeader';
import OrderTabs from './FormUtils/OrderTabs/Order';

const OrderTab = () => {
  return (
    <div className='OrderTab_container'>
      <SettingTabHeader title='Order History' text='Track, return or purchase items'/>
      <OrderTabs/>
    </div>
  )
}

export default OrderTab;