import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { questions } from "../questions";

const AccordionCard = () => {
  return (
    <div className="">
      <Accordion defaultExpanded className="p-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p component="span">What types of solar systems do you offer?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            We offer residential solar systems, commercial and industrial solar
            solutions, utility-scale solar projects, hybrid systems, solar
            streetlights, mini-grids, and solar water pumping solutions.
          </p>
        </AccordionDetails>
      </Accordion>
      {questions.map((question, index) => (
        <Accordion key={index} className="p-2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <p component="span">{question.question}</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>{question.answer}</p>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionCard;
