import React, { useState, useEffect, useCallback } from 'react';
import { Select, Spin } from 'antd';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LuSearch } from 'react-icons/lu';
import { useGetBaseProduct } from '../../../api/baseProduct';
import { Product } from '../../../types/item';
import _ from 'lodash';

interface SearchButtonProps {
  setOpen: (open: boolean) => void;
  setNoDataFound: (noData: boolean) => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ setOpen, setNoDataFound }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState<string | null>(searchParams.get('search'));
  
  const { data, isLoading } = useGetBaseProduct({
    search: query,
  });
  
  const BaseProducts = (data?.products as Product[]) || [];
  
  useEffect(() => {
    setNoDataFound(!isLoading && BaseProducts.length < 1);
  }, [isLoading, BaseProducts, setNoDataFound]);

  const options = BaseProducts.map((product: any) => ({
    value: product.base_product_id,
    label: product?.name as string,
  }));
  
  const debouncedSearchChange = useCallback(
    _.debounce((value: string) => {
      setQuery(value);
      navigate(`${window.location.pathname}?search=${value}`, {
        replace: true,
      });
    }, 500), // Adjust the debounce delay (in milliseconds) as needed
    []
  );

  const handleSearchChange = (value: string) => {    
    debouncedSearchChange(value);
  };

  const handleSelectChange = (value: number) => {
    const selectedProduct = BaseProducts.find(product => product.base_product_id === value);
    if (selectedProduct) {
      setOpen(false);
      navigate(`/product/${selectedProduct.base_product_id}`);
    }
  };

  const filterOption = (input: string, option?: { label: string }) => {
    if (!option) return false;
    return option?.label.toLowerCase().includes(input.toLowerCase());
  };

  return (
    <Select
      className='InputAutoComplete'
      suffixIcon={<LuSearch />}
      placeholder={t('Search Product Name') as string}
      allowClear
      showSearch
      loading={isLoading}
      onSearch={handleSearchChange}
      onChange={handleSelectChange}
      options={options}
      optionFilterProp="label"
      filterOption={filterOption}
      notFoundContent={isLoading ? <Spin /> : null}
    />
  );
};

export default SearchButton;
