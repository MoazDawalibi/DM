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
import { useLogin } from "../../api/auth";
import { toast } from "react-toastify";
import useAuthState from "../../state/AuthState";
import { FCM_TOKEN_KEY } from "../../utils/firebase/firebase";

const LoginForm = ({ setOpen }: any) => {
  const [t] = useTranslation();
  const { mutate, isLoading, isSuccess, data } = useLogin();
  const { login } = useAuthState();
  const FCM = localStorage.getItem(FCM_TOKEN_KEY)
  const random_token = Math.random()

  const handelSubmit = (values: any) => {
    if (!values.email || !values.password) {
      toast.error(t("pleas_fill_all_label"));

      return;
    }
    mutate({ ...values, fcm_token: random_token });
  };

  useEffect(() => {
    if (isSuccess) {
      login(data?.data as any);
      toast.success("login successfully");
      setOpen(false);
    }
  }, [isSuccess]);
  return (
    <div className="LoginForm">
      <h5> {t("Log in to DM")} </h5>
      <Formik
        initialValues={{ email: null, password: null }}
        onSubmit={handelSubmit}
      >
        <Form className="login_form_container">
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
            {t("Login")}
            {isLoading && <Spin />}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
