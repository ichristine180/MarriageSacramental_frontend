import React from "react";
import { useTranslation } from "react-i18next";

const FAQsPage = () => {
  const { t } = useTranslation();
  return (
    <div className="faq">
      <div className="faq-right">
        <img src="/faq.png" alt="FAQs" />
      </div>
      <div className="faq-left">
        <h1 className="faq-title">{t("FAQ")}</h1>
        <div className="faq-item">
          <h2>{t("Q1")}</h2>
          <p>{t("A1")}</p>
        </div>
        <div className="faq-item">
          <h2>{t("Q2")}</h2>
          <p>{t("A2")}</p>
        </div>
        <div className="faq-item">
          <h2>{t("Q3")}</h2>
          <p>{t("A3")}</p>
        </div>
        {/* <div className="faq-item">
          <h2>{t("Q4")}</h2>
          <p>{t("A4")}</p>
        </div>
        <div className="faq-item">
          <h2>{t("Q5")}</h2>
          <p>{t("A5")}</p>
        </div> */}
      </div>
    </div>
  );
};

export default FAQsPage;
