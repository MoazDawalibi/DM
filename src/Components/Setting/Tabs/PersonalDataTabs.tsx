import React from 'react'
import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import { FaKey } from "react-icons/fa";
import { Input } from 'antd';
import { Button } from 'react-bootstrap';
import { getInitialValues, handelSubmit } from './FormUtils/PersonalDataTabsUtils';
import SettingTabHeader from '../SettingTabHeader';
import { IoPerson } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi2";


const PersonalDataTabs = () => {
  const [t] = useTranslation();
  

  return (
    <div className='PersonalDataTabs'>

      <SettingTabHeader title='Identification' text='Verify your identity'/>
      <Formik
        initialValues={getInitialValues}
        onSubmit={handelSubmit}
      >
        <Form className='personl_data_form'>
        
          <div>
          <div className='form-outline mb-4 feild_container'>
                <Field
                placeholder={t('Full Name')}
                as={Input}
                type='text'
                id='username'
                name='username'
                prefix={<IoPerson />}
                className='form-control form-control-lg personl_data_feild'
                />
            </div>

            <div className='form-outline mb-4 feild_container'>
                <Field
                placeholder={t('E-Mail')}
                as={Input}
                type='password'
                id='password'
                name='password'
                prefix={<CiMail />}
                className='form-control form-control-lg personl_data_feild'
                />
            </div>
             <div className=' form-outline mb-4 feild_container'>
            
                <Field
                placeholder={t('Phone')}
                as={Input}
                type='text'
                id='username'
                name='username'
                prefix={<FiPhone />}
                className='form-control form-control-lg personl_data_feild'
                />
            </div>
          
          
          <div className=' form-outline mb-4 feild_container'>
            
                <Field
                placeholder={t('Password')}
                as={Input}
                type='text'
                id='username'
                name='username'
                prefix={<FaKey />}
                className='form-control form-control-lg personl_data_feild'
                />
            </div>
          </div>

          
            <Button  className='w-100 personl_data_form_button' type="submit">
              {t('Submit')}
            </Button>
        </Form>

      </Formik>
    </div>

  )
}

export default PersonalDataTabs