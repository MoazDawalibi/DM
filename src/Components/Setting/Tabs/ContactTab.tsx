import React, { useEffect, useRef, useState } from 'react'
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { IoMailOutline,IoEarthOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { useAddSupportMessage } from '../../../api/supportMessages';

const ContactTab = ({className=""}: {className?: string }) => {
    const form = useRef<any>(null);
    const { t } = useTranslation();
    const {mutate,isSuccess,isLoading} = useAddSupportMessage()
  
  const SoicalInfo: { icon: any; text: string }[] = [
      {
        icon: <IoMailOutline/>,
        text: "info@yourdomain.com",
      },
      {
        icon: <FiPhone/> ,
        text: "+1 (378) 400-1234",
      },
      {
        icon: <IoEarthOutline/>,
        text: "www.yourdomain.com",
      },
    ];
    
      const SoicalIcons: { icon: any; }[] = [
        {
          icon: <FaFacebookF/>,
        },
        {
          icon: <FaTwitter /> ,
        },
        {
          icon: <FaLinkedinIn />,
        },
        {
          icon: <FaInstagram  />,
        },
      ];
    
      const [Name , setName] = useState('') 
      const [Email , setEmail] = useState('') 
      const [Message , setMessage] = useState('') 

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
    
      
      if(!Name || !Email || !Message  ){
        toast.error(t("please_fill_all_input"))
      }else{
      }
      mutate({
        name:Name,
        email:Email,
        message:Message
      })
     
  
    };
  

    useEffect(() => {
      if(isSuccess){
        setMessage('')
        setName('')
        setEmail('')
        toast.success(t("Send Successfully"))

      }
    }, [isSuccess])
    

  return (
    <div className={`${className} contact_last_section`}>
          <div className='left'>
            <div className='social_info'>
                {
                SoicalInfo.map((item)=>(
                  <div className='Single_info'>
                    <span>{item.icon}</span>
                    <p>{item.text}</p>
                  </div>
                  ))
                }
                </div>
                <div className='icons'>
                {
                  SoicalIcons.map((item)=>(
                    <span>{item.icon}</span>
                  ))
                }
              </div>
          </div>

          <div className='right'>
            <Form ref={form} onSubmit={sendEmail} className='contact_form'>
              <Form.Group controlId="formName">
                <Form.Control type="text" name="to_name" placeholder={t('* Your Name')} value={Name} onChange={(e)=>setName(e.target.value)} required autoFocus />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Control type="email" name="from_name" placeholder={t('* Email')} value={Email} onChange={(e)=>setEmail(e.target.value)} required/>
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Control as="textarea" rows={6} name="message" placeholder={t('Message')}value={Message} onChange={(e)=>setMessage(e.target.value)} required />
              </Form.Group>
              <div className='button_container'>
                <Button disabled={isLoading}  className='mt-4 w-100 button' type="submit">
                  {t('Submit')}
                </Button>
              </div>
            </Form>
          </div>

        </div>
  )
}

export default ContactTab