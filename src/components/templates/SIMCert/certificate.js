import PropTypes from "prop-types";
import React from "react";
import { format } from "date-fns";
import { tz } from "moment-timezone";
import { get } from "lodash";
import {
  renderLogoSIM,
  renderAwardText,
  renderTwoSignatures,
  renderFooter
} from "./common/certificate";

const Template = ({ certificate }) => (
  <div>
    <div className="container" style={{ border: 0, borderColor: "#AAA", borderStyle: "solid" }}>
      {renderLogoSIM()}
      {renderAwardText(certificate)}
      {renderTwoSignatures(certificate)}
    </div>
	
    {renderFooter(certificate)}
  </div>
);

Template.propTypes = {
  certificate: PropTypes.object.isRequired
};
export default Template;
