import React from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import { useChangeLanguage } from '../../Hooks/useChangeLanguage';
import { useTranslation } from 'react-i18next';
import { TranslateEnum } from '../../enums/Translate';
import { ChangeModeComp, ChangeModeHelper } from '../HOC/ChangeMode';

const Translate: React.FC = () => {
  const { currentLanguage, changeLanguage } = useChangeLanguage();
  const { ARABIC, ENGLISH,CHINESE } = TranslateEnum;
  const { t } = useTranslation();
  
  const handleLanguageChange = (language: string) => {
    return ChangeModeHelper({
      ChangeModeFunction: changeLanguage,
      ChangeFunctionAttr: language
    });
  };

  const items = [
    {
      key: '1',
      label: <ChangeModeComp onClickFunction={handleLanguageChange(ENGLISH)} src="../Layout/En.svg" modeText={ENGLISH} />,
    },
    {
      key: '2',
      label: <ChangeModeComp onClickFunction={handleLanguageChange(ARABIC)} src="../Layout/Ar.svg" modeText={ARABIC} />,
    },
    {
      key: '3',
      label: <ChangeModeComp onClickFunction={handleLanguageChange(CHINESE)} src="../Layout/Ch.jpg" modeText={CHINESE} />,
    },
  ];
  return (
    <Space direction="vertical">
      <Dropdown menu={{ items }} placement="top">
        <Button className='Translate' disabled>{t(currentLanguage)}</Button>
      </Dropdown>
    </Space>
  );
};

export default Translate;
