import { tz } from "moment-timezone";
import React from "react";
import { format } from "date-fns";
import { get } from "lodash";


export const TIMEZONE = "Asia/Singapore";

export const printMeritTextStyle = {
  fontFamily: "Arial",
  fontWeight: "500!important",
  fontSize: "2rem",
  color: "#555",
  textAlign: "center"
};

export const formatDDMMMYYYY = dateString => {
  if (!dateString) return null;
  const date = new Date(dateString);

  return tz(date, TIMEZONE).format("DD-MMM-YYYY");
};

export const formatDDMONYYYY = dateString => {
  if (!dateString) return null;
  const date = new Date(dateString);

  return tz(date, TIMEZONE).format("DD MMMM YYYY");
};



export const formatNRIC = nricFin => {
  if (!nricFin) return null;
  const arrayNric = nricFin.split(":");
  return arrayNric.length === 3 ? arrayNric[2] : null;
};



export const formatCertName = meritFlag => (
  <p style={printMeritTextStyle}>{meritFlag === "Y" ? "WITH MERIT" : ""}</p>
);

export const formatCertID = certId => {
  if (!certId) return null;
  const arrayCertId = certId.split(":");
  return arrayCertId.length > 0 ? arrayCertId[0] : null;
};

export const formatBold = str => <strong>{str}</strong>;

export const formatSignatoriesPosition = sigPosition => {
  if (!sigPosition) return null;
  return sigPosition.split("|");
};
