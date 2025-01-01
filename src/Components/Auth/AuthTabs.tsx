import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { useTranslation } from 'react-i18next';
import RegisterForm from '../../Pages/Auth/Register';
import LoginForm from '../../Pages/Auth/LoginForm';
import VerifyForm from '../../Pages/Auth/VerifyForm';

const AuthTabs = ({setOpen}:any) => {

    const {t} = useTranslation();

    const items: TabsProps['items'] = [
        {
          key: '1',
          label: t('Login'),
          children: <LoginForm setOpen={setOpen} />,
      
        },
        {
          key: '2',
          label: t('Create Account'),
          children: <RegisterForm/>,
      
        },
        {
          key: '3',
          label: t('Verify'),
          children: <VerifyForm/>,
      
        },
      ];
      
  return (
    <Tabs className='auth_tab' defaultActiveKey="1" items={items}  />
    )
}

export default AuthTabs