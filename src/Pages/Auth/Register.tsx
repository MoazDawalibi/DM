import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import Translate from "../../Components/Utils/Translate";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { AppKeyEnum } from "../../enums/AppKey";
import { CiMail } from "react-icons/ci";
import { FaKey } from "react-icons/fa";
import { Input, Spin } from "antd";
import { Button } from "react-bootstrap";
import { IoMdPerson } from "react-icons/io";
import { toast } from "react-toastify";
import { useRegister } from "../../api/auth";
import useAuthState from "../../state/AuthState";

const RegisterForm = ({ setOpen }: any) => {
  const [t] = useTranslation();

  const navigate = useNavigate();
  const { mutate, isLoading, isSuccess, data } = useRegister();

  const handelSubmit = (values: any) => {
    if (!values.email || !values.password || !values.name) {
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
    <div className="RegisterForm">
      <h5> {t("Create your account")} </h5>
      <Formik
        initialValues={{ email: "", password: "", name: "" }}
        onSubmit={handelSubmit}
      >
        <Form className="login_form_container">
          <div className="form-outline mb-4">
            <Field
              placeholder={t("Full Name")}
              as={Input}
              type="name"
              id="name"
              name="name"
              prefix={<IoMdPerson />}
              className="form-control form-control-lg login_input"
            />
          </div>
          <div className=" form-outline mb-4">
            <Field
              placeholder={t("E-mail")}
              as={Input}
              type="email"
              id="email"
              name="email"
              prefix={<CiMail />}
              className="form-control form-control-lg login_input"
            />
          </div>

          <div className="form-outline mb-4">
            <Field
              placeholder={t("Password")}
              as={Input}
              type="password"
              id="password"
              name="password"
              prefix={<FaKey />}
              className="form-control form-control-lg login_input"
            />
          </div>

          <Button
            disabled={isLoading}
            className="w-100 login_button"
            type="submit"
          >
            {t("Create Account")}
            {isLoading && <Spin />}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
