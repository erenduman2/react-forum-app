import { useState, useEffect } from 'react'
import styles from "../styles.module.css";
// import Provider from "../Profile/deneme";
import FormControl, { useFormControl } from '@mui/material/FormControl';
import { useQuestion } from "../../context/QuestionContext";

import {
    Button,
    Box,
    TextField
} from '@mui/material/';
import { useUser } from '../../context/UserContext';

function NewQuestion() {
    const guest = "guest: ";
    const { username, isLoggedIn, loggedInUser } = useUser();

    const { questions, setQuestions, questionCount, setQuestionCount } = useQuestion();

    const [question, setQuestion] = useState("");
    const [header, setHeader] = useState("");
    const [userName, setUserName] = useState(username);


    const handleQChange = (e) => {
        setQuestion(e.target.value);
    };

    const handleAChange = (e) => {
        setHeader(e.target.value);
    };

    const handleUChange = (e) => {
        setUserName(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        let newKey = questions[questions.length - 1].key + 1;
        isLoggedIn ? setQuestions([...questions, { question: question, key: newKey, header: header, user: loggedInUser }]) : setQuestions([...questions, { question: question, key: newKey, header: header, user: guest + userName }]);
        setQuestion("");
        setHeader("");
        setUserName("");
    }
    return (
        <div className='newq'>
            <form onSubmit={submitHandler} >
                <Box style={{ marginTop: 50 }} className={styles.center} >
                    <TextField label='Subject' variant="filled" rows={1} value={header} onChange={handleAChange} multiline={true} className={styles.textArea}></TextField>
                </Box>
                <Box className={styles.center} >
                    <TextField label='Question' variant="filled" rows={18} value={question} onChange={handleQChange} multiline={true} className={styles.textArea}></TextField>
                </Box>
                <Box className={styles.center} >
                    <TextField label='User Name' variant="filled" rows={1} value={isLoggedIn ? loggedInUser : userName} onChange={handleUChange} multiline={true} className={styles.userName}></TextField>
                </Box>
                <Box className={styles.send}>
                    <Button type="submit" color='primary' variant="contained" sx={{ height: 30 }} >Ask</Button>
                </Box>
            </form>
        </div>
    )
}

export default NewQuestion
