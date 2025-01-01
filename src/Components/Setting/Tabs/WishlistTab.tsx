import React from 'react'
import SettingTabHeader from '../SettingTabHeader'
import ProductCard from '../../Home/ProductCard'
import { useGetBaseProduct } from '../../../api/baseProduct';
import { Product } from '../../../types/item';
import { Spin } from 'antd';
import { useGetFavorite } from '../../../api/Favorite';

const WishlistTab = () => {

  const { data , isLoading } = useGetFavorite();
  const BaseProducts = (data?.products as Product[]) || ([] as []);

  return (
    <div className='WishlistTab_container'>
      <SettingTabHeader title='Wishlist' text='See your favorites list here'/>
      
      <main className='ProductCards'>
      {isLoading && <Spin/>}
            {BaseProducts?.map((item: Product, index: number) => (
              <ProductCard key={index} item={item} />
            ))}
        </main>
    </div>
  )
}

export default WishlistTab