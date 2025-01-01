import React from 'react'
import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import { FaKey } from "react-icons/fa";
import { Input } from 'antd';
import SettingTabHeader from '../SettingTabHeader';
import { Button } from 'react-bootstrap';
import { useChangePassword } from '../../../api/auth';


const ChangePasswordTab = () => {
  const [t] = useTranslation();

  const {mutate} = useChangePassword()
  const handelSubmit = (values: any) => {
    mutate({ ...values });
  };

  return (
    <div className='ChangePasswordTab'>
      <SettingTabHeader title='Security settings' text='Change password and phone number'/>
      <Formik
        initialValues={{ password: null }}
        onSubmit={handelSubmit}
      >
        <Form className='personl_data_form'>
          <div className='form-outline mb-4 feild_container'>
                <Field
                placeholder={t('Change Password')}
                as={Input}
                type='text'
                id='password'
                name='password'
                prefix={<FaKey />}
                className='form-control form-control-lg personl_data_feild'
                />
            </div>

          <Button  className='w-100 personl_data_form_button' type="submit">
            {t('Submit')}
          </Button>

        </Form>

      </Formik>
    </div>

  )
}

export default ChangePasswordTab