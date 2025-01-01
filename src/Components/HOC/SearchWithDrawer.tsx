import { useState } from 'react';
import type { DrawerProps } from 'antd';
import { Drawer, Space } from 'antd';
import { TiDeleteOutline } from "react-icons/ti";
import SearchButton from '../Utils/Search/SearchButton';
import { RiSearchLine } from "react-icons/ri";
import Empty from '../Utils/Search/Empty';

const SearchWithDrawer = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');
  const [noDataFound, setNoDataFound] = useState(false);
  
  return (
    <>
      <Space>
        <div onClick={() => setOpen(true)} className="icon_navbar">
          <RiSearchLine />
        </div>
      </Space>

      <Drawer
        title={""}
        placement={placement}
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        key={placement}
        width={720}
        style={{ maxHeight: "40%" }}
      >
        <div className="search_first_section">
          <SearchButton setOpen={setOpen} setNoDataFound={setNoDataFound} />
          <span className='delete_icon' onClick={() => setOpen(false)}><TiDeleteOutline /></span>
        </div>
        <div className='not_found_section'>
          {noDataFound ? <Empty />:"" }
        </div>
      </Drawer>
    </>
  );
};

export default SearchWithDrawer;
