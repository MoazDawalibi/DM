import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import ContactTab from '../../Components/Setting/Tabs/ContactTab';
import HeaderLink from '../../Components/Ui/HeaderLink';

const Contact = () => {
  const { t } = useTranslation();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  
    
    if(!Name || !Email || !Message  ){
      toast.error(t("please_fill_all_input"))
    }else{
      toast.success(t("Send Successfully"))
    }
    
    setMessage('')
    setName('')
    setEmail('')

  };

  const [Name , setName] = useState('') 
  const [Email , setEmail] = useState('') 
  const [Message , setMessage] = useState('') 



  return (
    <div className='contact_container'>
        <HeaderLink text='Contact Us'/>

        <div className='contact_image_section'>

            <div className='text_sections'>
                <h1>{t("Contact Us")}</h1>
                <p>{t("DM")} / {t("Contact")}</p>
            </div>
        </div>

        <div className='contact_mid_section'>
          <h3>{t("We love meeting new people and helping them")}.</h3>
        </div>
       
        <ContactTab/>
    </div>
  )
}

export default Contact