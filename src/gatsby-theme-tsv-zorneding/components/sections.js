import React from "react";
import PropTypes from "prop-types";
import { default as MainSections } from "../../../plugins/gatsby-theme-tsv-zorneding/src/components/sections";
import DepartmentTeaser from "../../components/sections/department-teaser-list";

const Sections = ({ sections, admin }) => {
  if (!sections) {
    return <></>;
  }

  const content = sections.map(function (section, i) {
    if (section.type === "department_teaser_list") {
      return <DepartmentTeaser title={section.title} admin={admin} key={i} />;
    }
    return <MainSections sections={[section]} admin={admin} key={i} />;
  });
  return <>{content}</>;
};

Sections.propTypes = {
  sections: PropTypes.array.isRequired,
};

export default Sections;
