import React, { useState } from 'react';
import type { DrawerProps } from 'antd';
import {  Drawer, Space } from 'antd';
import { BsArrowLeft } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { FaShoppingBag } from 'react-icons/fa';
import { LuUser2 } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import SettingDrawerSingleTab from '../Setting/SettingDrawerSingleTab';
import { IoMdHeartEmpty } from 'react-icons/io';
import { CiLogout } from 'react-icons/ci';
import { LocalStorageEnum } from '../../api/utils/LocalStorage';
import useAuthState from '../../state/AuthState';


const SettingDrawer: React.FC = () => {
    
    const {t} = useTranslation();
    const SettingDrawerData  = [
        { tabName: "Orders", icon: FaShoppingBag },
        { tabName: "Wish List", icon: IoMdHeartEmpty },
    ];
  
  const {logout} = useAuthState()
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');
  const User = JSON.parse(localStorage.getItem(LocalStorageEnum.USER_KEY) ?? "");
    
  return (
    <>
      <Space>
      <div className='icon_navbar'onClick={()=>setOpen(true)}><LuUser2 /></div>
      
      </Space>
      <Drawer
        title={""}
        placement={placement}
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        key={placement}
        width={270}
        style={{maxHeight:"44%"}}
      >
        <div className="setting_drawer_first_section">
            <p>{t("Profile")}</p>
            <span onClick={()=>setOpen(false)}><BsArrowLeft/> {t("Back")}</span>
          </div>
          <div className='setting_drawer_body'>
            <div className='setting_drawer_tab'>
                <CgProfile/>
                <div>
                    <h4>{User?.name}</h4>
                    <h4>{User?.email}</h4>
                </div>
            </div>

            <div className='setting_drawer_tabs'>
                {SettingDrawerData.map((data, index) => (
                    <SettingDrawerSingleTab onCLick={() => setOpen(false)} key={index} Icon={data.icon} tabName={data.tabName} />
                ))}
                    <SettingDrawerSingleTab onCLick={logout} link='/'  Icon={CiLogout} tabName={"Logout"} />

            </div>
          </div>
      </Drawer>
    </>
  );
};

export default SettingDrawer;

