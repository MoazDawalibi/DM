import React from 'react'
import { OrderData } from '../../../../../data/OrderData'
import OrdersTable from './OrderTable'

const CanceledOrderTab = () => {
  return (
    <div>
      <OrdersTable data={OrderData}/>
      
    </div>
  )
}

export default CanceledOrderTab