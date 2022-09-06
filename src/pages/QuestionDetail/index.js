import React, { useEffect, useState } from 'react'
import { useQuestion } from "../../context/QuestionContext";
import { useParams } from "react-router-dom";
import {
  Button,
  Box,
  TextField,
  Paper,
} from '@mui/material/'
import styles from "../styles.module.css";
import { useUser } from '../../context/UserContext';


function QuestionDetail() {
  const {loggedInUser, isLoggedIn} = useUser();
  const guest = "guest: ";

  const { questions, answer, setAnswer } = useQuestion();
  const { q_id } = useParams();
  const [newAnswer, setNewAnswer] = useState();
  const [user, setUser] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setAnswer([...answer, { answer: newAnswer, key: Number(q_id), user: isLoggedIn ? loggedInUser : guest + user }]);
    setNewAnswer("");
    setUser("");
    console.log(answer);
  };

  const changeAHandler = (e) => {
    setNewAnswer(e.target.value);
  };

  const changeUHandler = (e) => {
    setUser(e.target.value);
  };

  return (
    <div>

      {
        questions.map((item, key) => {
          if (item.key == q_id) {
            return (
              <div key={key + 1}>
                <Box className={styles.center}>
                  <Paper elevation={24} sx={{ backgroundColor: "rgb(190, 190, 190)", padding: 1, fontSize: 20}}>{item.header}</Paper>
                </Box>
                <Box className={styles.center}>
                  <Paper elevation={24} sx={{ width: 950, height: 410, backgroundColor: "rgb(190, 190, 190)", padding: 1, fontSize: 20}} >{item.question}</Paper>
                </Box>
                <br />
                <a className={styles.anchor} href="#answer">Cevap Yaz</a>
              </div>)
          }
        })
      }
      {
        answer.map((item, key) => {
          if (item.key == q_id) {
            return <div key={key + 1}>
              <Box key={key} className={styles.center}>
                <Paper elevation={24} sx={{ width: 950, height: 100, backgroundColor: "rgb(68, 0, 17)", padding: 1, color: "white", fontFamily: "Arial"}} >{item.answer}</Paper>
              </Box>
              <p style={{ marginLeft: 1340, marginTop: 5, color: 'rgb(145, 53, 0)' }} >{item.user}</p>
            </div>
          }

        })
      }
      <form onSubmit={submitHandler}>
        <Box className={styles.center}><TextField id='answer' variant="filled" value={newAnswer} onChange={changeAHandler} rows={4} multiline={true} className={styles.textArea}></TextField></Box>
        <Box className={styles.center}><TextField sx={{ width: 300, marginLeft: 82 }} variant="filled" 
        value={isLoggedIn ? loggedInUser : user} onChange={changeUHandler} rows={1} multiline={true} className={styles.textArea}></TextField></Box>
        <Box className={styles.send}>
          <Button type="submit" color='primary' variant="contained" sx={{ height: 30 }} >Yanitla</Button>
        </Box>
      </form>
    </div>
  )
}

export default QuestionDetail
