import React from 'react'
import { useTranslation } from 'react-i18next'

const SettingTabHeader = ({title,text}:{title:string ,text:string}) => {

    const {t} = useTranslation();

  return (
    <div className='SettingTabHeader'>
        <h4>{t(title)}</h4>
        <p>{t(text)}</p>
    </div>
  )
}

export default SettingTabHeader