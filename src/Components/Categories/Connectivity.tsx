import React from "react";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";
import { useFilterStateState } from "../../state/Filter";
import { useGetCategories } from "../../api/Categories";
import { Category } from "../../types/item";
import { languageObject } from "../../utils/languageObject";
import { useGetBaseSubCategory } from "../../api/baseSubCategory";

const BrandFilter = () => {
  const { setFilter, Filter } = useFilterStateState();
  const onChange =
    (Category: Category): CheckboxProps["onChange"] =>
    (e) => {
      const checked = e.target.checked;
        
      if (checked) {
        
        setFilter([...Filter, { name:languageObject(Category?.name),id:Category?.id,type:"sub_category", index: Filter.length }]);
      } else {
        const newArray = Filter?.filter((item: any) => item.name !== languageObject(Category?.name));
        setFilter(newArray);
      }
    };


      
  const {data:categories_data} = useGetBaseSubCategory()
  const categories = categories_data?.[0] as Category[] || []  ; 
    
  return (
    <div className="CheckboxFilter">
      {categories?.map((brand) => (
        <Checkbox
          checked={Filter.some((item: any) => languageObject(item?.name) === languageObject(brand?.name))}
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
