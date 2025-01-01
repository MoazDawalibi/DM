import React, { useState } from 'react';
import type { DrawerProps } from 'antd';
import {  Button, Drawer, Space } from 'antd';
import { BsArrowLeft } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import AuthTabs from '../Auth/AuthTabs';
import useAuthState from '../../state/AuthState';
import { FaUser } from 'react-icons/fa';
import { LuUser2 } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import SettingDrawer from './SettingDrawer';


const WithDrawer: React.FC = () => {

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');
  const {t} = useTranslation();
  const {isAuthenticated} = useAuthState()
  const navigate = useNavigate()

  return (
    <>
      <Space>
        {isAuthenticated?
      <div className='icon_navbar setting_drawer_container' ><SettingDrawer/> </div>
      :
      <Button onClick={()=>setOpen(true)} icon={t("Login / Sign Up")} className='MenuButton' type='primary' />
      }
      </Space>
      <Drawer
        title={""}
        placement={placement}
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        key={placement}
        width={600}
        className='AuthAithDrawer'
        style={{maxHeight:"90%"}}
      >
        <div className="auth_first_section">
            <span onClick={()=>setOpen(false)}><BsArrowLeft/> {t("Back")}</span>
          </div>
          <div className='auth_header'>
            <AuthTabs setOpen={setOpen} />
          </div>
      </Drawer>
    </>
  );
};

export default WithDrawer;

