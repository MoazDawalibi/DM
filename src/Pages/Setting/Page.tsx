import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaChevronRight } from 'react-icons/fa';
import SettingTabs from '../../Components/Setting/SettingTabs';
import HeaderLink from '../../Components/Ui/HeaderLink';

function SettingPage() {
    const { t } = useTranslation();

    return (
        <>
            <div className='setting_container'>
                <HeaderLink text='Personal Data' isMulti={true} extraText='Account' extraLink='/'/>

                <div className="setting_body">
                    <div className='setting_body_tabs'>
                        <SettingTabs/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SettingPage