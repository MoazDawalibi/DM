import React, { useEffect } from 'react'
import { Formik, Form, Field } from 'formik';
import Translate from '../../Components/Utils/Translate';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AppKeyEnum } from "../../enums/AppKey";
import { CiMail } from "react-icons/ci";
import { FaKey } from "react-icons/fa";
import { Input, Spin } from 'antd';
import { Button } from 'react-bootstrap';
import { IoMdPerson } from "react-icons/io";
import { toast } from 'react-toastify';
import { useVerify } from '../../api/auth';


const VerifyForm = () => {
  const [t] = useTranslation();
  const { mutate, isLoading, isSuccess, data } = useVerify();

  const handelSubmit = (values: any) => {
    if (!values.email || !values.verify_code ) {
      toast.error(t("pleas_fill_all_label"));
      return;
    }
    mutate(values);
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("registered successfully");

    }
  }, [isSuccess]);

  return (
    <div className='VerifyForm'>
      <h5> {t("verify your account")} </h5>
      <Formik
        initialValues={{ email: '', verify_code: '' }}
        onSubmit={handelSubmit}
      >
        <Form className='login_form_container'>

        <div className=' form-outline mb-4'>
            <Field
              placeholder={t('E-mail')}
              as={Input}
              type='email'
              id='email'
              name='email'
              prefix={<CiMail />}
              className='form-control form-control-lg login_input'
            />
          </div>


            <div className='form-outline mb-4'>
                <Field
                placeholder={t('verify code')}
                as={Input}
                type='number'
                // max={5}
                id='verify_code'
                name='verify_code'
                prefix={<IoMdPerson />}
                className='form-control form-control-lg login_input'
                />
            </div>
        


          <Button    disabled={isLoading}  className='w-100 login_button' type="submit">
            {t('verify')} 
            {isLoading && <Spin />}
          </Button>
          
        </Form>

      </Formik>
    </div>

  )
}

export default VerifyForm;