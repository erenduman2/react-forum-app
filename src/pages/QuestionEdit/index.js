import { Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import { useEffect, useState } from 'react'
import { useQuestion } from "../../context/QuestionContext";
import { useUser } from "../../context/UserContext";
import styles from "../styles.module.css";
import LoginAndRegister from "../../components/LoginAndRegister";


function QuestionEdit() {
  const { questions, setQuestions, answer, setAnswer } = useQuestion();
  const { isLoggedIn, loggedInUser } = useUser();
  const [choosen, setChoosen] = useState();



  //pop-up
  const [open, setOpen] = useState(false);
  const handleClickOpen = (event) => {
    const key = event.target.getAttribute("id");
    setChoosen(key);
    setOpen(true);
  };
  const handleYes = () => {
    setOpen(false);
    let tmpQuestions = [...questions];
    tmpQuestions.splice(choosen, 1);
    tmpQuestions.map((item, key) => {
      item.key = key;
    });
    setQuestions([...tmpQuestions]);
    console.log("asdad", answer);
    let tmpAnswers = [];
    let count = 0;
    console.log("öncesi", answer);
    console.log(choosen);
    answer.map((item) => {
      if (item.key != choosen) {
        tmpAnswers[count] = item;
        count++;
      }
    });
    console.log("sonrası0", tmpAnswers);

    tmpAnswers.map((item, key) => {
      if (item.key > choosen) {
        item.key -= 1;
      }
    });
    console.log("sonrası", tmpAnswers);
    setAnswer([...tmpAnswers]);

  };
  const handleNo = () => {
    setOpen(false);
  };

  const initial = [];
  for (let i = 0; i < questions.length; i++) {
    initial.push(false);
  }

  const [isEditing, setIsEditing] = useState(initial);
  const [newQuestion, setNewQuestion] = useState([...questions]);

  const editHandler = (event) => {
    const key = event.target.getAttribute("id");
    let tmpEditing = [...isEditing];
    tmpEditing[key] = !tmpEditing[key];
    setIsEditing([...tmpEditing]);
  };

  const completeHandler = (event) => {
    const key = event.target.getAttribute("id");
    let tmpEditing = [...isEditing];
    tmpEditing[key] = !tmpEditing[key];
    console.log("new", newQuestion);
    setQuestions([...newQuestion]);
    setIsEditing([...tmpEditing]);

  };

  const changeHandler = (event) => {
    const key = event.target.getAttribute("id");
    let tmp = [...newQuestion];
    tmp[key].question = event.target.value;
    setNewQuestion([...tmp]);
  }

  const deleteHandler = () => {

  };
  return (
    <div>
      {
        !isLoggedIn &&
        <>
          <Typography sx={{ marginRight: 3, marginTop: 13 }} className={styles.title} variant="h5" gutterBottom>You have to login or register to edit your questions.</Typography>
          <LoginAndRegister />
        </>
      }
      {isLoggedIn &&
        questions.map((item, key) => {
          // setNewQuestion(item.question);
          return (item.user == loggedInUser &&
            <Box key={key} className={styles.center}>
              {isEditing[key] ? <Button id={`${key}`} variant="outlined" onClick={completeHandler} >complete</Button> : <Button id={`${key}`} variant="outlined" onClick={editHandler} >edit</Button>}

              {isEditing[key] ?
                <TextField id={`${key}`} variant="filled" rows={18} value={newQuestion[key].question} onChange={changeHandler} multiline={true} className={styles.textArea}></TextField> :
                // <TextField variant="filled" rows={18} value={newQuestion[key].question} onChange={(e) => setNewQuestion(e.target.value)} multiline={true} className={styles.textArea}></TextField> : 
                <TextField variant="filled" rows={18} value={item.question} multiline={true} className={styles.textArea}></TextField>
              }
              <Button id={`${key}`} sx={{ height: 140, marginTop: 20 }} onClick={handleClickOpen} variant="outlined" color="error">delete</Button>
            </Box>
          )
        })
      }
      <Dialog
        open={open}
        onClose={handleNo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleYes}>Yes</Button>
          <Button onClick={handleNo} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default QuestionEdit


