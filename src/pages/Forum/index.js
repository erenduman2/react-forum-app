import React from 'react'
import { Button, Box, TextField, Accordion, AccordionSummary, Typography, AccordionDetails, Paper } from "@mui/material";
import { useQuestion } from "../../context/QuestionContext";
import styles from "../styles.module.css";
import { Link, Navigate } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Forum() {
  const { questions } = useQuestion();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <div>
      <Box>
        {
          questions.map((item, key) => {
            return (

              <Box key={key} className={styles.center}>
                <Accordion expanded={expanded === `panel${key}`} onChange={handleChange(`panel${key}`)} sx={{ width: 1200, color: "white", backgroundColor: "rgb(102, 64, 70)" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                      {item.header}
                    </Typography>
                    <Typography sx={{ color: 'rgb(218, 193, 162)', marginLeft: 75 }}>{item.user}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Link style={{ textDecoration: "none", color: "black" }} to={`${key}`}>
                      <Typography sx={{ color: "white" }}>
                        {item.question}
                      </Typography>
                    </Link>
                  </AccordionDetails>
                </Accordion>
              </Box>
            )
          })
        }
      </Box>
    </div>
  )
}

export default Forum