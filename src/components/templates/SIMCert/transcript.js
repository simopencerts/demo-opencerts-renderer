import PropTypes from "prop-types";
import React from "react";
import { get, groupBy } from "lodash";
import { IMG_LOGO_RP_HORIZONTAL,
         IMG_LOGO_SIM_BACKGRND_CERT,
         IMG_LOGO_SIM } from "./images";

import {
  formatDDMMMYYYY,
  formatDDMONYYYY, 
  formatBold,
  formatSignatoriesPosition
} from "./functions";

export const fullWidthStyle = {
  width: "80%",
  height: "auto"
};

export const linestyle01 = {
  width: "100%",
};

export const fullTableWidthStyle = {
  width: "700px",
  border: "1px solid black",
  height: "auto"
};

export const fullTableGridStyle = {
  width: "100%",
  border: "1px solid black",
  height: "auto"
};

export const thWidth60Left = {
  width: "60%",
  textAlign: "left"
};

export const signatureTextStyle = {
  fontFamily: "arial",
  color: "black",
  fontSize: "0.8rem"
};

export const titleTextStyle = {
  fontSize: "2.0rem",
  textAlign: "center",
  fontWeight: "bold"
};

export const boxStyle = {
  border: 2,
  borderColor: "#AAA",
  borderStyle: "solid",
  textAlign: "center"
};

export const SIMtitleTextStyle = {
  fontSize: "2.5rem",
  textAlign: "center",
  fontWeight: "bold"
};

export const printTextStyle = {
  fontFamily: "TimesNewRoman",
  fontStyle: "Italic",
  fontWeight: "500!important",
  fontSize: "1.2rem",
  color: "#555",
  textAlign: "center"
};

export const printTextStyleFooter = {
  fontFamily: "TimesNewRoman",
  fontWeight: "500!important",
  fontSize: "1.2rem",
  color: "black",
  textAlign: "center",
  marginTop: "0rem", 
  marginBottom: "2rem"
};

export const SIMprintTextStyle_TNR01 = {
  fontFamily: "arial",
  fontWeight: "500!important",
  fontSize: "1.6rem",
  color: "black",
  textAlign: "center",
  fontWeight: "bold"
};

export const SIMprintTextStyle_TNR02 = {
  fontFamily: "arial",
  fontSize: "1rem",
  color: "black",
  textAlign: "center",
  fontWeight: "bold"
};

export const SIMprintTextStyle_TNR03 = {
  fontFamily: "arial",
  fontSize: "1rem",
  color: "black",
  textAlign: "center"
};

export const arial10Pt = {
  fontFamily: "Arial",
  fontSize: "16px",
  textAlign: "center",
  marginTop: "-1.5rem",
  marginBottom: "0",
  marginLeft: "0",
  marginRight: "0"
};

const borderImgStyle = {
  border: "1px solid transparent",
  borderColor: "white",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${IMG_LOGO_SIM_BACKGRND_CERT})`
};

export const renderHeader = () => (
  <div className="row d-flex justify-content-center " style={{ marginTop: "2rem" }}>
    <div className="col-2" />		
	  <div className="row d-flex justify-content-center">
        <img src={IMG_LOGO_SIM} />
      </div>	
	<div className="col-2" />
  </div>
);

export const renderHeaderText01 = () => (
 <div>
    <div className="row d-flex justify-content-center" style={{ marginTop: "1rem" }} />
     <div className="row d-flex justify-content-center">
      <div style={SIMprintTextStyle_TNR01}>
        <p style={SIMprintTextStyle_TNR01}>SINGAPORE INSTITUTE OF MANAGEMENT</p>
      </div>
     </div>		
 </div>
);

export const renderHeaderText05 = () => (
 <div>
    <div className="row d-flex justify-content-center" style={{ marginTop: "1rem" }} />
     <div className="row d-flex justify-content-center" style={{marginBottom: "1rem" }}>
      <div style={SIMprintTextStyle_TNR01} >OFFICIAL TRANSCRIPT <div className="row d-flex justify-content-center">
	  </div>
      </div>

     </div>	
	  	  	  <hr />	 
 </div>
);

export const renderHeaderText02 = certificate => (
 <div>
    <div className="row d-flex justify-content-left" style={{ marginTop: "0.8rem"}} />
     <div className="row d-flex justify-content-left" style={{ marginLeft: "0.25rem"}}>
      <div style={SIMprintTextStyle_TNR02}>
        <p style={SIMprintTextStyle_TNR02}>Cumulative Grade Point Average:  &nbsp; {formatBold(certificate.additionalData.cumulativeScore)}</p>
      </div>
     </div>		
 </div>
);


export const renderHeaderText03 = () => (
 <div>
    <div className="row d-flex justify-content-left" style={{ marginTop: "0.8rem" }} />
     <div className="row d-flex justify-content-left" style={{ marginLeft: "0.25rem"}}>
      <div style={SIMprintTextStyle_TNR03}>
        <p style={SIMprintTextStyle_TNR03}>Successfully completed all course requirements</p>
      </div>
     </div>		
 </div>
);


export const renderHeaderText04 = certificate => (
 <div> 	   
    <div className="row d-flex justify-content-left" style={{ marginTop: "0.8rem" }} />
     <div className="row d-flex justify-content-left" style={{ marginLeft: "0.25rem"}}>
	 AWARDED THE: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {formatBold(certificate.name)} 
	 <br/> 
	 <hr />
	 </div> 
	 <div> <hr style={linestyle01} /> </div>
	 <div>  
		<div className="col-0"> </div>
		<div className="col-12 text-center" style={{ marginTop: "-1rem", marginBottom: "-1rem" }}>
		<strong>----{" "}END OF RECORDS----{" "}</strong>	
	
        </div>
      </div>	    <br />	
 </div>
);

export const renderHeaderText06 = () => (
    <div className="row d-flex justify-content-left">
		<div className="row d-flex justify-content-left" style={{ marginLeft: "0.25rem"}}>
            <div className="col-12"><strong>Grading Legend:</strong></div>                    
        </div>   
    </div> 			
);


// additional remarks for PET only
export const renderRemarksGradingSystem = isNOTDPLUS => (
  <span>
    <br />
    Incomplete Grade is implemented from Academic Year 2012 Semester 2 onwards
    {isNOTDPLUS ? " for G901 Character and Citizenship Education module" : null}
    . <br />A module for which grade point or modular credit is not accorded
    will not be considered in the computation of the cGPA.
  </span>
);

export const renderTableHeader = () => (
  <tr>
    <th style={{ border: "1px solid", width: "10%", backgroundColor: "#e7f3fd", paddingLeft: "10px" }}>Grade</th>
    <th style={{ border: "1px solid", width: "10%", backgroundColor: "#e7f3fd", paddingLeft: "10px" }}>Grade Points</th>
	<th style={{ border: "1px solid", width: "20%", backgroundColor: "#e7f3fd", paddingLeft: "10px" }}>Marks</th>
    <th style={{ border: "1px solid", width: "60%", backgroundColor: "#e7f3fd", paddingLeft: "10px" }}>Descriptor</th>
  </tr>
);

export const renderGradeList = listGrade => {
  const strList = listGrade.map((obj, i) => (
    <tr key={i}>
      <td style={{ border: "0.9px solid", paddingLeft: "10px", font: "arial", fontSize: "0.8rem" }}>{obj.grade}</td>
      <td style={{ border: "0.9px solid", paddingLeft: "10px", font: "arial", fontSize: "0.8rem" }}>{obj.score}</td>
	  <td style={{ border: "0.9px solid", paddingLeft: "10px", font: "arial", fontSize: "0.8rem" }}>{obj.marks}</td>
      <td style={{ border: "0.9px solid", paddingLeft: "10px", font: "arial", fontSize: "0.8rem" }}>{obj.desc}</td>
    </tr>
  ));
  return strList;
};

export const renderGradingSystem = certificate => {
  // get the template name
  const strTemplate = get(certificate, "$template");
  // check it is PET template
  const isCET = strTemplate.substr(15, 6) === "P-MAIN" ? 0 : 1;
  // check whether it is DPLUS template
  const isNOTDPLUS = strTemplate.substr(15, 4) === "C-DP" ? 0 : 1;

  const listGradeText1L = [
    { grade: "A+",  score: "4.000", marks: "90 to 100", desc: "Distinction" },
	{ grade: "A",   score: "4.000", marks: "80 to 89",  desc: "Excellent" },
    { grade: "B+",  score: "3.500", marks: "75 to 79",  desc: "Very Good" },
    { grade: "B",   score: "3.000", marks: "70 to 74",  desc: "Very Good" },
    { grade: "C+",  score: "2.500", marks: "65 to 69",  desc: "Good" },
    { grade: "C",   score: "2.000", marks: "60 to 64",  desc: "Good" },
    { grade: "D+",  score: "1.500", marks: "55 to 59",  desc: "Pass" },
    { grade: "D",   score: "1.000", marks: "50 to 54",  desc: "Pass" } ,
    { grade: "F",   score: "0.000", marks: "0 to 49",   desc: "Fail" } ,
	{ grade: "ABS", score: "0.000", marks: "  -  ",     desc: "Absent" } ,
    { grade: "T",   score: "0.000", marks: "  -  ",     desc: "Exempted" }
	
  ];

  const listGradeText1R = [
    { grade: "E", 		score: "0.5", 	desc: "Fail" },
    { grade: "F", 		score: "0.0", 	desc: "Fail" },
    { grade: "P", 		score: "2.0", 	desc: "Pass" },
    { grade: "N", 		score: "-", 	desc: "Null(Defaulted)" },
    { grade: "Pass*", 	score: "-", 	desc: "Pass with Commendation" },
    { grade: "Pass", 	score: "-", 	desc: "Pass" },
    { grade: "Fail",  	score: "-", 	desc: "Fail" }
  ];

  const listGradeText2L = [
    { grade: "DIST", 	score: "4.0", 	desc: "Distinction^" },
    { grade: "A", 		score: "4.0", 	desc: "Excellent" },
    { grade: "B+", 		score: "3.5", 	desc: "Very Good" },
    { grade: "B", 		score: "3.0", 	desc: "Very Good" },
    { grade: "C+", 		score: "2.5", 	desc: "Good" },
    { grade: "C", 		score: "2.0", 	desc: "Good" },
    { grade: "D+", 		score: "1.5",	desc: "Pass" }
  ];

  const listGradeText2R = [
    { grade: "D", 			score: "1.0", 	desc: "Pass" },
    { grade: "F", 			score: "0.0", 	desc: "Fail" },
    { grade: "Pass*", 		score: "-", 	desc: "Pass with Commendation" },
    { grade: "Pass", 		score: "-", 	desc: "Pass" },
    { grade: "Fail", 		score: "-", 	desc: "Fail" },
    { grade: "Exempted", 	score: "-", 	desc: "Exempted from taking the module" }
  ];

  // if PET or DPLUS, display grading system otherwise do not display
  return (
    <div className="row">
      <div className="col-12" />
       <div className="col-12" style={{ fontSize: "0.9rem" }}>
	    <div className="row">
          <div className="col-0" style={{ marginLeft: "1rem"}}>
		     <table style={fullTableWidthStyle} >
               <thead>
                {renderTableHeader()}
			   </thead>	
			  <tbody>	
                {renderGradeList(listGradeText1L)}
              </tbody>
            </table>	
          </div>
       </div>
      </div>
    </div>
  );
};

export const renderCourse = (certificate, course) => {
  // Get student info and course description
  const recipientName = get(certificate, "recipient.name");
  const recipientNric = get(certificate, "recipient.nric");
  const recipientFin = get(certificate, "recipient.fin");  
  const DOB = get(certificate, "recipient.Birthdate");        
  const recipientNricFin = !recipientNric ? recipientFin : recipientNric;
  const studentId = get(certificate, "recipient.studentId");
  const admissionDate = get(certificate, "additionalData.admissionDate");
  const graduationDate = get(certificate, "additionalData.graduationDate");
  const graduationStatus = get(certificate, "recipient.Status");  
  const strTemplate = get(certificate, "$template");  
  const isCET = strTemplate.substr(15, 6) === "P-MAIN" ? 0 : 1;

  // Group all modules by semesters
  const groupedSubjects = groupBy(course, "semester");
  const renderedSemesters = Object.keys(groupedSubjects).map(semester =>
    groupedSubjects[semester].map((s, i) => (
      <tr key={i}>
        <td style={{ textAlign: "left" }}> {s.semester === "-" ? null : s.semester.toString()} </td>
        <td style={{ textAlign: "left" }}> {s.courseCode !== "ZZZ" || s.semester === "-" ? s.name : formatBold(s.name)} </td>
        <td style={{ textAlign: "left" }}> {s.courseCode !== "ZZZ" ? s.grade.padEnd(2, " ") : ""}&nbsp;</td>
      </tr>
    ))
  );

  return (
    <div>      
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-2"><strong>Name</strong></div>
            <div className="col-10">
            <strong>:&nbsp;&nbsp;{recipientName}</strong>
            </div>
          </div>
          <div className="row">
            <div className="col-2"><strong>Course</strong></div>
            <div className="col-10">
            <strong>:&nbsp;&nbsp;{certificate.name}</strong>
            </div>
          </div>
	  
          <div className="row">
            <div className="col-2"><strong>StudentID</strong></div>
            <div className="col-4"> <strong>:&nbsp;&nbsp; {studentId || certificate.additionalData.studentId} </strong></div>
            <div className="col-2 justify-content-left" style={{ textAlign: "left" }} >
            <strong>NRIC no./FIN</strong></div>
            <div className="col-2 justify-content-right" style={{ textAlign: "left" }} >&nbsp;
            <strong>:&nbsp;&nbsp;&nbsp;{recipientNricFin}</strong>
            </div>
          </div>


          <div className="row">
            <div className="col-2"><strong>Date of Admission</strong></div>
            <div className="col-4"> <strong>:&nbsp;&nbsp; {formatDDMMMYYYY(admissionDate)} &nbsp;</strong></div>
            <div className="col-2 justify-content-left" style={{ textAlign: "left" }} >
            <strong>Date of Birth</strong></div>
            <div className="col-2 justify-content-right" style={{ textAlign: "left" }} >&nbsp;
            <strong>:&nbsp;&nbsp;&nbsp;{formatDDMMMYYYY(DOB)}</strong>
            </div>
          </div>
		  
          <div className="row">
            <div className="col-2"><strong>Status</strong></div>
            <div className="col-4"> <strong>:</strong>&nbsp;&nbsp;<strong>Completed Program</strong></div>
            <div className="col-2 justify-content-left" style={{ textAlign: "left" }} >
            <strong>Page</strong></div>
            <div className="col-2 justify-content-right" style={{ textAlign: "left" }} >&nbsp;
            <strong>:&nbsp;&nbsp;&nbsp;1 of 1 </strong>
            </div>			
          </div>
          <div className="row">  </div>	     
        </div>
      </div>
	
      <div className="row" style={{ marginTop: "-1rem", marginBottom: "-1rem" }}>
        <div className="col text-center"><hr />
          <table style={fullWidthStyle}>
            <tbody>
              <tr>
                <th style={{ textAlign: "left" }}>{isCET ? "Year/Month" : "SEMESTER"}</th>
                <th style={{ textAlign: "left" }}>Module</th>
                <th style={{ textAlign: "left" }}>Grade</th>
              </tr>
              {renderedSemesters}
            </tbody>
          </table>
        </div>
      </div>
   <br /> 
    
    </div>
	
  );
};

export const renderTranscript = certificate => {
  // Group all modules by courses
  const transcript = get(certificate, "transcript");
  // const groupedCourses = groupBy(transcript, "semester");
  const renderedCourses = renderCourse(certificate, transcript);
  return <div>{renderedCourses}</div>;
};

// display GPA for PET and DPLUS
export const renderPETGPA = GPA => (
  <span>
    Cumulative Grade Point Average : {GPA.toFixed(2)}
    <br />
  </span>
);

export const renderGPA = certificate => {
  const GPA = get(certificate, "cumulativeScore", undefined);
  const WithMerit = get(certificate, "additionalData.merit");
  const WithMeritTag = WithMerit === "Y" ? "with Merit" : "";
  const strTemplate = get(certificate, "$template");
  const isCET = strTemplate.substr(15, 6) === "P-MAIN" ? 0 : 1;
  const isNOTDPLUS = strTemplate.substr(15, 4) === "C-DP" ? 0 : 1;
  const isNOTDCN = strTemplate.substr(15, 5) === "C-DCN" ? 0 : 1;

  return GPA ? (
    <div className="row">
      <div className="col-0"> </div>
      <div className="col-0-12" >
        {formatBold(renderPETGPA(GPA))}
		<br /> 
		Successfully completed all course requirements 
		<br />
		<br /> 
		AWARDED THE &nbsp;&nbsp;&nbsp;&nbsp;{formatBold(certificate.name)} {formatBold(WithMeritTag)}
        <br />
      </div>
      <div className="col-0"> </div>
      <div className="col-12 text-center">
	  	<hr style={{ borderWidths: "2rem" }} />
        ----{" "}
        <strong>END OF RECORDS</strong>
        ----{" "}
      </div>
    </div>
  ) : null;
};

export const renderSignature = certificate => {
  const certSign = formatSignatoriesPosition(
    certificate.additionalData.transcriptSignatories[0].position
  );
  return (
      <div className="row d-flex justify-content-center align-items-end" style={{ marginTop: "2rem", marginBottom: "2rem" }} >
  	  <div className="col-4 text-left" style={{ marginTop: "0rem", marginBottom: "2rem" }} >
			Date Printed:  <strong>{formatDDMMMYYYY(certificate.issuedOn)}</strong>
	  </div>
	  <div className="col-4" />	
	  <div className="col-4">
      <div className="px-4">
         <img style={fullWidthStyle} src={certificate.additionalData.transcriptSignatories[0].signature} />
	     <span style={arial10Pt}>
			<strong>__________________________________</strong>
         </span>
      </div>
      <div className="text-center">
          <span style={signatureTextStyle}>{certSign[0]}</span>
          <br />
          <br />

        </div>
        </div>

        </div>	  		
  );
};

export const renderFooterText = () => (
    <div className="row d-flex justify-content-center">
        <div className="text-center" style={ printTextStyleFooter } >
            <div className="printTextStyleFooter"><strong>461 Clementi Road, Singapore 599491 Website: www.sim.edu.sg</strong></div>   
	    </div>			
    </div> 			
);

const Template = ({ certificate }) => (
  <div className="container" style={ borderImgStyle }>
    {renderHeader()}
	{renderHeaderText01()}
	{renderHeaderText05()}
    {renderTranscript(certificate)}
	{renderHeaderText02(certificate)}
	{renderHeaderText03(certificate)}
	{renderHeaderText04(certificate)}
	{renderHeaderText06()}
    {renderGradingSystem(certificate)}
    {renderSignature(certificate)}	
	{renderFooterText()}
  </div>
);

Template.propTypes = {
  certificate: PropTypes.object.isRequired
};
export default Template;
