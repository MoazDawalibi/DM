import React, { useState, useEffect } from "react";
import ProductCard from "../../Components/Home/ProductCard";
import { MdOutlineCancel } from "react-icons/md";
import { useFilterStateState } from "../../state/Filter";
import { Drawer, Pagination, Select, Spin } from "antd";
import FilterSection from "./FilterSection";
import { useGetBaseProduct } from "../../api/baseProduct";
import { Category, Product } from "../../types/item";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import HeaderLink from "../../Components/Ui/HeaderLink";

const Page = () => {
  const { Filter, setFilter } = useFilterStateState();
  const [searchParams, setSearchParams] = useSearchParams();
  const type_param = searchParams.get('type');

  const [type, setType] = useState(type_param);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [perPage, setPerPage] = useState(10);
  

  useEffect(() => {
    setType(type_param);
  }, [type_param]);


  const handel_filter_delete = (index: number) => {
    setFilter(Filter.filter((_: any, i: number) => i !== index));
  };

  const handel_filter_reset = () => {
    setFilter([]);
  };

  const handleChange = (value: string) => {
    const newArray = Filter?.filter((item: any) => item.select !== true);
    setFilter([
      ...newArray,
      { name: value, index: Filter.length, select: true },
    ]);
    if (type_param) {
      searchParams.delete('type');
      setSearchParams(searchParams);
    }
    setType(value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const categories = Filter?.filter((item:any)=> item.select !== true)?.map((item:any)=> item?.id)
  
    
  const { data , isLoading } = useGetBaseProduct({
    type: type,
    page: currentPage,
    category_id:categories
  });
  
  useEffect(() => {
    if (data?.meta) {
      setTotalItems(data.meta?.total);
      setPerPage(data.meta?.per_page);
      console.log(data.meta);
      
    }
  }, [data]);

  const BaseProducts = (data?.products as Product[]) || ([] as []);

  const [t] = useTranslation();

  return (
    <div className="Categories">
      <HeaderLink text='Categories'/>

      <main>
        <div className="Categories_left">
          <header>
            <h4>{t("Filters")}</h4>
            <h6 onClick={() => handel_filter_reset()}>{t("Clear_All")}</h6>
          </header>
          <FilterSection />
        </div>
        <div className="Categories_Right">
          <header>
            <div className="filter_menu show_on_responsive">
              <button className="button" onClick={showDrawer}>
                {t("Filters")}
              </button>
              <Drawer
                style={{ minHeight: "100vh" }}
                onClose={onClose}
                open={open}
              >
                <FilterSection />
                <div className="filtered_items "></div>
              </Drawer>
            </div>
            <div className="filtered_items remove_on_responsive">
              {Array.isArray(Filter) &&
                Filter.map((item: any, index: number) => (
                  <span
                    key={index}
                    onClick={() => handel_filter_delete(index)}
                    className="filtered_item"
                  >
                    {item?.name}
                    <MdOutlineCancel />
                  </span>
                ))}
            </div>

            <div className="FillterSelect">
              <Select
                style={{ width: 130 }}
                size="large"
                placeholder={t("Sort by")}
                onChange={handleChange}
                options={[
                  { value: "ascending", label: t("ascending") },
                  { value: "descending", label: t("descending") },
                  { value: "new_arrivals", label: t("new Arrivals") },
                  { value: "discount", label: t("discount") },
                ]}
              />
            </div>
          </header>
          <main>
            {isLoading && <Spin/>}
            {BaseProducts?.map((item: Product, index: number) => (
              <ProductCard key={index} item={item} />
            ))}
          </main>
          <div className="Pagination">
            <Pagination
              current={currentPage}
              total={totalItems}
              pageSize={perPage}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
