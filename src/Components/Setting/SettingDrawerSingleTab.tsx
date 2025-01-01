import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { IconBaseProps } from 'react-icons/lib'
import { Link } from 'react-router-dom'

const SettingDrawerSingleTab = ({tabName, Icon,onCLick, link = "/settings"}:{tabName:string, Icon:any,onCLick:any, link?:string}) => {
  return (
    <Link to={link}>
        <div onClick={onCLick} className='setting_drawer_tab without_primary'>
            <Icon/>
            <div>
                <h4>{tabName}</h4>
            </div>
        </div>
    </Link>
  )
}

export default SettingDrawerSingleTab