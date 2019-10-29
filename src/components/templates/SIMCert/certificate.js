import PropTypes from "prop-types";
import React from "react";
import { format } from "date-fns";
import { tz } from "moment-timezone";
import { get } from "lodash";
import {
  IMG_CERTIFICATE_SEAL,
  IMG_LOGO_SIM,
  IMG_LOGO_SIM_SIGN 
} from "./images";
import {
  formatDDMMMYYYY,
  formatDate,
  formatDatePrefix,
  formatDDMONYYYY,
  formatCertName,
  formatSignatoriesPosition
} from "./functions";

export const TIMEZONE = "Asia/Singapore";

export const logoLStyle = {
  textAlign: "left",
  width: "100%",
  height: "auto"
};
export const logoRStyle = {
  width: "100%",
  height: "auto",
  textAlign: "right"
};
export const fullWidthStyle = {
  width: "100%",
  height: "auto"
};
export const signatureTextStyle = {
  fontFamily: "Times New Roman",
  fontWeight: "500!important",
  color: "black",
  fontSize: "1.1rem"
};
export const printCertStyle = {
  fontFamily: "Old English Text MT",
  fontWeight: "500!important",
  fontSize: "3rem",
  color: "#555",
  textAlign: "center"
};

export const printRecipientStyle = {
  fontFamily: "Lucida Calligraphy",
  fontWeight: "500!important",
  fontSize: "3rem",
  color: "#555",
  textAlign: "center"
};

export const printTextStyle = {
  fontFamily: "Times New Roman",
  fontWeight: "500!important",
  fontSize: "2rem",
  color: "#555",
  textAlign: "center"
};

export const SIMprintTextStyle_TNR01 = {
  fontFamily: "TimesNewRoman",
  fontWeight: "500!important",
  fontSize: "1.6rem",
  color: "black",
  textAlign: "center"
};

export const SIMprintTextStyle_TNR02 = {
  fontFamily: "TimesNewRoman",
  fontWeight: "500!important",
  fontSize: "2rem",
  color: "black",
  textAlign: "center"
};

export const SIMprintTextStyle_TNR03 = {
  fontFamily: "TimesNewRoman",
  fontWeight: "500!important",
  fontSize: "1.6rem",
  color: "solid black",
  textAlign: "center"
};

export const SIMprintTextStyle_TNR04 = {
  fontFamily: "TimesNewRoman",
  fontWeight: "500!important",
  fontSize: "2.4rem",
  color: "solid black",
    marginLeft: "16rem",
  textAlign: "left"
};

export const SIMprintTextStyle_TNR05 = {
  fontFamily: "TimesNewRoman",
  fontWeight: "500!important",
  fontSize: "1.4rem",
  color: "black",
  textAlign: "center"
};

export const SIMprintTextStyle_LSR01 = {
  fontFamily: "LucidaSansRoman",
  fontWeight: "500!important",
  fontSize: "1.4rem",
  color: "black",
  marginLeft: "16rem",
  textAlign: "left"
};

export const SIMprintTextStyle_LSR02 = {
  fontFamily: "LucidaSansRoman",
  fontWeight: "500!important",
  fontSize: "1.4rem",
  color: "black",
  textAlign: "left"
};


export const printTextStyle_01 = {
  fontFamily: "GarageGothic-Regular",
  fontWeight: "400", 
  fontstyle: "normal",  
  fontSize: "5.5rem",
  textAlign: "left"
};

export const SIMtitleTextStyle_01 = {
fontFamily: "Bodoni MT Condensed",
  color: "solid black",
  fontSize: "5rem",
  textAlign: "center"
};

export const singaporeTextStyle = {
  color: "#555",
  fontSize: "3rem"
};

export const nameTextStyle = {
  fontSize: "3rem",
  textAlign: "center"
};

export const titleTextStyle = {
  color: "rgb(30,93,200)",
  fontSize: "3rem",
  textAlign: "center"
};

export const SIMtitleTextStyle = {
  color: "#555",
  fontSize: "4rem",
  textAlign: "center"
};

export const imageStyle = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
  height: "auto"
};

export const supportSUSSTextStyle = {
  display: "block",
  fontSize: "1.6rem",
  marginLeft: "16rem",
  textAlign: "left"
};

export const supportJPTextStyle = {
  fontFamily: "Times New Roman",
  display: "block",
  fontSize: "1.5rem",
  fontWeight: "900",
  textAlign: "center"
};

export const arial10Pt = {
  fontFamily: "Arial",
  fontSize: "16px",
  textAlign: "center",
  marginTop: "0",
  marginBottom: "0",
  marginLeft: "0",
  marginRight: "0"
};

export const renderLogoSIM = () => (
  <div className="row d-flex justify-content-center">
    <div className="col-2" />
    <div className="row d-flex justify-content-center">
      <img src={IMG_LOGO_SIM} />
    </div>
    <div className="col-2" />
  </div>
);


// Render Signature
export const renderTwoSignatures = document => {
  const certSign = formatSignatoriesPosition(
    get(document, "additionalData.certSignatories[0].position")
  );
  return (
  <div className="container"> 
     <style> {`
        .signature-container{
        width:100%;
                            } 
        .Examination-boardsign-label{
        border-top:1px solid #aaa;
        text-align:center;
        color: #aaa;
      }							
							
             `}
     </style>
	
    <div className="row d-flex justify-content-center align-items-end" style={{ marginTop: "4rem", marginBottom: "3rem" }}>
	  <div className="col-4"> </div>
      <div className="col-4" style={{ marginLeft: "-16rem", marginRight: "-16rem"}}>
        <div className="signature-container">
          <img style={logoLStyle} src={get(document,"additionalData.certSignatories[0].signature")} />
		  <span style={arial10Pt}><strong>_______________________________________</strong></span>
		     <div className="text-center">
		         <span style={signatureTextStyle}>{get(document,"additionalData.certSignatories[0].position")}</span>
             </div>		  
        </div>
      </div>

      <div className="col-4" style={{ marginLeft: "22rem", marginRight: "-6rem"}}>
	  <div className="px-4" style={{ marginLeft: "5rem"}}>

          <img style={fullWidthStyle} src={IMG_CERTIFICATE_SEAL} />

		</div>
      </div>
	</div>	

		
  </div>
  );
};

export const renderIssuingDate = document => (
  <span>
    {formatDDMONYYYY(get(document, "issuedOn"))}{" "}
  </span>
);



//Render Award text
export const renderAwardText = document => (
  <div>
    <div className="row d-flex justify-content-center" style={{ marginTop: "1rem" }} />
    <div className="row d-flex justify-content-center">
      <div> <p style={SIMprintTextStyle_TNR01}>SINGAPORE INSTITUTE OF MANAGEMENT</p> </div>
    </div>	
	
    <div className="row d-flex justify-content-left" style={{ marginLeft: "16rem" }} >
      <div style={printTextStyle_01}>
        <p>{get(document, "additionalData.description")}</p>
      </div>
    </div>	
	
    <div className="row d-flex justify-content-center" style={{ marginTop: "-1rem", marginLeft: "0rem"  }}>
      <div style={printTextStyle_01}>
		<p>{get(document, "additionalData.description1")}</p>
      </div>
    </div>	
	
	
    <div style={SIMprintTextStyle_TNR05}>&nbsp;</div>	
	<div style={SIMprintTextStyle_LSR01}>It is hereby certified that</div>
    <div style={SIMprintTextStyle_TNR05}>&nbsp;</div>
    <p style={SIMprintTextStyle_TNR04}>{get(document, "recipient.name")}</p>
    <div style={SIMprintTextStyle_LSR01} >&nbsp;</div>			
    <div style={SIMprintTextStyle_LSR01} >having attended the prescribed course</div>
    <div style={SIMprintTextStyle_LSR01}>and successfully passed the required  </div>
    <div style={SIMprintTextStyle_LSR01}>examination(s) was awarded the</div>
	<div style={supportSUSSTextStyle}>{get(document, "name")}</div>	
    <div style={printTextStyle}>&nbsp;</div>
	
    <div className="row d-flex justify-content-left" style={{ marginLeft: "0rem" }} >
	  <p style={SIMprintTextStyle_LSR01}>on </p>
      <p style={SIMprintTextStyle_TNR03}>&nbsp; {renderIssuingDate(document)}</p>
    </div>
  </div>
);

//Render footer 
export const renderFooter = document => (
  <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="col-6 text-left">&nbsp;</div>
      <div className="col-6 text-right"style={{ marginLeft: "-14rem"}}>
        {get(document, "additionalData.transcriptId")}
      </div>
    </div>
  </div>
);


const Template = ({ document }) => (
  <div>
    <div className="container" style={{ border: 0, borderColor: "#AAA", borderStyle: "solid" }}>
      {renderLogoSIM()}
      {renderAwardText(document)}


      {renderTwoSignatures(document)}
 

    </div>
      {renderFooter(document)}
  </div>
);

export default Template;

Template.propTypes = {
  document: PropTypes.object.isRequired
};
