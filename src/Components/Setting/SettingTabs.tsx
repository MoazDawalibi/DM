import React, { useState } from 'react';
import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import { useTranslation } from 'react-i18next';
import { CgProfile } from "react-icons/cg";
import { IoCartOutline  } from "react-icons/io5";
import { IoMdHeartEmpty  } from "react-icons/io";
import { GrShieldSecurity,GrContactInfo  } from "react-icons/gr";
import { CiLogout } from "react-icons/ci";
import ContactTab from './Tabs/ContactTab';
import ChangePasswordTab from './Tabs/ChangePasswordTab';
import OrderTab from './Tabs/OrderTab';
import WishlistTab from './Tabs/WishlistTab';
import { useWindowResize } from '../../Hooks/useWindowResize';
import useAuthState from '../../state/AuthState';
import { LocalStorageEnum } from '../../api/utils/LocalStorage';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

type TabPosition = 'left' | 'right' | 'top' | 'bottom';

const SettingTabs: React.FC = () => {
    const {windowWidth} = useWindowResize()
    
    const [tabPosition, setTabPosition] = useState<TabPosition>(windowWidth < 800 ? 'top' : 'left');
    const {t} = useTranslation();
    const {logout} = useAuthState()

    const name = JSON.parse(localStorage.getItem(LocalStorageEnum?.USER_KEY) ?? '')?.name
    const handleLogout = () =>{
      logout()
      toast.success(t("you logged out successfully"))
    }    
    const items: TabsProps['items'] = [
        {
          key: '1',
          label: name,
          icon: <CgProfile/>,
          disabled: true,
        },
        // {
        //   key: '2',
        //   label: t('Personal Data'),
        //   children: <PersonalDataTabs/>,
        //   icon: <TbUserEdit/>
        // },
        {
          key: '3',
          label: t('Orders'),
          children: <OrderTab/>,
          icon: <IoCartOutline/>
        },
        {
          key: '4',
          label: t('Wishlist'),
          children: <WishlistTab/>,
          icon: <IoMdHeartEmpty />
        },
        {
          key: '5',
          label: t('Security and access'), 
          children: <ChangePasswordTab/>,
          icon: <GrShieldSecurity/>
        
        },
        {
          key: '6',
          label: t('Contact Us'), 
          children: <ContactTab className='contact_tab'/>,  
          icon: <GrContactInfo/>
    
        },
        {
          key: '7',
          label: <Link to={"/"}><span onClick={handleLogout}>{t('Logout')}</span></Link>, 
          icon: <CiLogout/>
          
        },
      ];

    
    return (
        <>
          <Tabs
            tabPosition={tabPosition}
            addIcon
            items={items}
            className='tabs'
            defaultActiveKey='2'       
          />
        </>
    );
};

export default SettingTabs;