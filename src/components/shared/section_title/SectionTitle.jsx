/* eslint-disable react/prop-types */
import React from "react";
import "./section_title.scss";

const SectionTitle = ({ title }) => {
  return (
    <p className="section-title">
      <strong>{title}</strong>
    </p>
  );
};

export default SectionTitle;
