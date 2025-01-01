import React from "react";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";
import { useFilterStateState } from "../../state/Filter";
import { useGetCategories } from "../../api/Categories";
import { Category } from "../../types/item";
import { languageObject } from "../../utils/languageObject";

const BrandFilter = () => {
  const { setFilter, Filter } = useFilterStateState();
  const onChange =
    (Category: Category): CheckboxProps["onChange"] =>
    (e) => {
      const checked = e.target.checked;

      if (checked) {
        setFilter([...Filter, { name:Category?.name,id:Category?.id,type:"category", index: Filter.length }]);
      } else {
        const newArray = Filter?.filter((item: any) => item.name !== Category?.name);
        setFilter(newArray);
      }
    };



  const {data:categories_data} = useGetCategories({
    parent_id:''
  })
  const categories = categories_data?.categories as Category[] || []  ; 
  
  return (
    <div className="CheckboxFilter">
      {categories?.map((brand) => (
        <Checkbox
          checked={Filter.some((item: any) => item.name === brand?.name)}
          key={brand?.id}
          onChange={onChange(brand)}
                    
        >
          {languageObject(brand?.name)}
        </Checkbox>
      ))}
    </div>
  );
};

export default BrandFilter;
