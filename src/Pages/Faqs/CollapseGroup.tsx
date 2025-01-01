import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import classNames from 'classnames';

const CollapseGroup = () => {
  const { t } = useTranslation();
  const [activeKey, setActiveKey] = useState<string[]>(["1"]);

  const onChange = (key: string | string[]) => {
    if (typeof key === 'string') {
      setActiveKey([key]);
    } else {
      setActiveKey(key);
    }
  };

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: t("Can I purchase products from DM using installment payments?"),
      children: (
        <p>
          {t("Yes, DM offers the option to purchase products using both cash and installment payments. This allows you to choose the payment method that suits your needs and budget")}.
        </p>
      ),
    },
    {
      key: "2",
      label: t("How can I engage with the magazine content on DM?"),
      children: (
        <p>
          {t("You can actively engage with the magazine content by leaving comments and participating in the question-and-answer section. Feel free to share your thoughts, ask questions, and interact with enthusiasts in the community")}.
        </p>
      ),
    },
    {
      key: "3",
      label: t("Does DM offer a warranty on its products?"),
      children: (
        <p>
          {t("Yes, DM provides a warranty on all eligible products. The specific warranty details may vary depending on the manufacturer and product category. Please refer to the product description or contact our customer support for more information")}.
        </p>
      ),
    },
    {
      key: "4",
      label: t("Is DM a secure platform for online shopping?"),
      children: (
        <p>
          {t("Yes, DM provides a warranty on all eligible products. The specific warranty details may vary depending on the manufacturer and product category. Please refer to the product description or contact our customer support for more information")}.
        </p>
      ),
    },
    {
      key: "5",
      label: t("How can I get assistance with my purchase or any other inquiries?"),
      children: (
        <p>
          {t("If you need assistance with your purchase or have any questions, our dedicated customer support is here to help. You can reach out to us through the contact page on our website, and we'll be happy to assist you promptly")}.
        </p>
      ),
    },
  ];

  return (
    <Collapse
    className="faqs_collaps"
      defaultActiveKey={["1"]}
      expandIconPosition="right"
      bordered={false}
      activeKey={activeKey}
      onChange={onChange}
      items={items.map(item => ({
        ...item,
        label: (
          <span
            className={classNames({
              'label-active': activeKey.includes(item.key as string)
            })}
          >
            {item.label}
          </span>
        )
      }))}
    />
  );
};

export default CollapseGroup;
