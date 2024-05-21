import React from "react";

import css from "./Description.module.css";

const Description = ({ title, description }) => {
  return (
    <div>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p classname={css.description}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};
export default Description;
