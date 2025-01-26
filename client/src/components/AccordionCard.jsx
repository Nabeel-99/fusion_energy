import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { questions } from "../questions";

const AccordionCard = () => {
  return (
    <div className="">
      <Accordion defaultExpanded className="">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">
            What types of solar systems do you offer?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer residential solar systems, commercial and industrial solar
            solutions, utility-scale solar projects, hybrid systems, solar
            streetlights, mini-grids, and solar water pumping solutions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {questions.map((question, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <Typography component="span">{question.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{question.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionCard;
