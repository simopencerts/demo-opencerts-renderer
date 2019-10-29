import PropTypes from "prop-types";
import React from "react";
import { format } from "date-fns";
import { get, groupBy } from "lodash";
import { tz } from "moment-timezone";
import _ from "lodash";
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

export const fullWidthStyle_01 = {
  width: "60%",
  height: "auto",
  marginLeft: "4rem",
    marginBottom: "-1.5rem"
};

export const linestyle01 = {
  width: "100%",
};

export const fullTableWidthStyle = {
  width: "800px",
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

export const renderHeaderText02 = document => (
 <div>
    <div className="row d-flex justify-content-left" style={{ marginTop: "0.8rem"}} />
     <div className="row d-flex justify-content-left" style={{ marginLeft: "0.25rem"}}>
      <div style={SIMprintTextStyle_TNR02}>
        <p style={SIMprintTextStyle_TNR02}>Cumulative Grade Point Average:  &nbsp; {formatBold(document.additionalData.cumulativeScore)}</p>
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


export const renderHeaderText04 = document => (
 <div> 	   
    <div className="row d-flex justify-content-left" style={{ marginTop: "0.8rem" }} />
     <div className="row d-flex justify-content-left" style={{ marginLeft: "0.25rem"}}>
	 AWARDED THE: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {formatBold(document.name)} 
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




export const renderTableHeader = () => (
  <tr>
    <th style={{ border: "1px solid", width: "12%", backgroundColor: "#e7f3fd", paddingLeft: "10px" }}>Grade</th>
    <th style={{ border: "1px solid", width: "11%", backgroundColor: "#e7f3fd", paddingLeft: "10px" }}>Grade Points</th>
	<th style={{ border: "1px solid", width: "22%", backgroundColor: "#e7f3fd", paddingLeft: "10px" }}>Marks</th>
    <th style={{ border: "1px solid", width: "54%", backgroundColor: "#e7f3fd", paddingLeft: "10px" }}>Descriptor</th>
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

export const renderGradingSystem = document => {
  // get the template name
 // const strTemplate = get(document, "$template");
  // check it is PET template
 // const isCET = strTemplate.substr(15, 6) === "P-MAIN" ? 0 : 1;


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

export const renderCourse = (document, course) => {
  // Get student info and course description
  const recipientName = get(document, "recipient.name");
  const recipientNric = get(document, "recipient.nric");
  const recipientFin = get(document, "recipient.fin");  
  const DOB = get(document, "recipient.Birthdate");        
  const recipientNricFin = !recipientNric ? recipientFin : recipientNric;
  const studentId = get(document, "recipient.studentId");
  const admissionDate = get(document, "additionalData.admissionDate");
  const graduationDate = get(document, "additionalData.graduationDate");
  const graduationStatus = get(document, "recipient.Status");  
//  const strTemplate = get(document, "$template");  
//  const isCET = strTemplate.substr(15, 6) === "P-MAIN" ? 0 : 1;

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
            <strong>:&nbsp;&nbsp;{document.name}</strong>
            </div>
          </div>
	  
          <div className="row">
            <div className="col-2"><strong>Student ID</strong></div>
            <div className="col-4"> <strong>:&nbsp;&nbsp; {studentId || document.additionalData.studentId} </strong></div>
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
                <th style={{ textAlign: "left" }}>Year/Month</th>
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

export const renderTranscript = document => {
  // Group all modules by courses
  const transcript = get(document, "transcript");
  // const groupedCourses = groupBy(transcript, "semester");
  const renderedCourses = renderCourse(document, transcript);
  return <div>{renderedCourses}</div>;
};


export const renderSignature = document => {
  const certSign = formatSignatoriesPosition(
    document.additionalData.transcriptSignatories[0].position
  );
  return (
      <div className="row d-flex justify-content-center align-items-end" style={{ marginTop: "2rem", marginBottom: "2rem" }} >
  	  <div className="col-4 text-left" style={{ marginTop: "0rem", marginBottom: "2rem" }} >
			Date Printed:  <strong>{formatDDMMMYYYY(document.issuedOn)}</strong>
	  </div>
	  <div className="col-4" />	
	  <div className="col-4">
      <div className="px-4" >
         <img style={fullWidthStyle_01} src={document.additionalData.transcriptSignatories[0].signature} />
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

const Template = ({ document }) => (
  <div className="container" style={ borderImgStyle }>
    {renderHeader()}
	{renderHeaderText01()}
	{renderHeaderText05()}
    {renderTranscript(document)}
	{renderHeaderText02(document)}
	{renderHeaderText03(document)}
	{renderHeaderText04(document)}
	{renderHeaderText06()}
    {renderGradingSystem(document)}
    {renderSignature(document)}	
	{renderFooterText()}
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};
export default Template;
