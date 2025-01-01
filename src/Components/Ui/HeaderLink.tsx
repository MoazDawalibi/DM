import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { THeaderLink } from '../../types/App';

const HeaderLink = ({text,isMulti,extraText,extraLink}:THeaderLink) => {
    const { t } = useTranslation();

  return (
    <div className='header_link'>
        <Link to={"/"} className='first_link'>{t("Home")}</Link>
        <FaChevronRight/>
        {
            isMulti ?
            <>
                <Link to={`/${extraLink}`} className='first_link'>{ t(extraText || "")}</Link>
                <FaChevronRight/>
            </>
            : ""
        }
        <span className='page_title_link'>{t(text)}</span>
    </div>
  )
}

export default HeaderLink