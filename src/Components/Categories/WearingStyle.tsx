import React from "react";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";
import { useFilterStateState } from "../../state/Filter";

const WearingStyleFilter = () => {
  const { setFilter, Filter } = useFilterStateState();
  const onChange =
    (name: string): CheckboxProps["onChange"] =>
    (e) => {
      const checked = e.target.checked;

      if (checked) {
        setFilter([...Filter, { name, index: Filter.length }]);
      } else {
        const newArray = Filter?.filter((item: any) => item.name !== name);
        setFilter(newArray);
      }
    };

  const array_of_filter = [
    "WearingStyle1",
    "WearingStyle2",
    "WearingStyle3",
    "WearingStyle4",
    "WearingStyle5",
  ];
  return (
    <div className="CheckboxFilter">
      {array_of_filter?.map((WearingStyle) => (
        <Checkbox
          checked={Filter.some((item: any) => item.name === WearingStyle)}
          key={WearingStyle}
          onChange={onChange(WearingStyle)}
        >
          {WearingStyle}
        </Checkbox>
      ))}
    </div>
  );
};

export default WearingStyleFilter;
