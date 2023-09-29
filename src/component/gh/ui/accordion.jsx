import UI from "@gh/ui";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function App({ isExpanded = false, title, content, onChange }) {
  return (
    <Accordion expanded={isExpanded} onChange={() => onChange(title)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
        <Typography>
          {title}
          {isExpanded ? "dsad" : "no"}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
