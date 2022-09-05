import { Box } from '@mui/system';
import React from 'react'
import { useQuestion } from "../../context/QuestionContext";
import { useUser } from "../../context/UserContext";
import styles from "../styles.module.css";
import { Link } from "react-router-dom";
import TextareaAutosize from '@mui/material/TextareaAutosize';

function MyQuestions() {
  const { questions } = useQuestion();
  const { loggedInUser } = useUser();
  return (
    <div>
      {
        questions.map((item, index) => (item.user == loggedInUser &&
          <Box key={index} className={styles.center}>
            <Link to={`/forum/${item.key}`}>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                style={{ width: 800, height: 200, backgroundColor: "rgb(173, 224, 165)", color: "black", fontSize: 14, fontFamily: "Arial" }}
                disabled={true}
                value={item.question}
              />
            </Link>
          </Box>
        ))
      }
    </div>
  )
}

export default MyQuestions
