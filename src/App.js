import './App.css';
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,

} from "react-router-dom";

import Homepage from "./pages/Homepage";
import Forum from "./pages/Forum";
import Profile from "./pages/Profile";
import NewQuestion from "./pages/NewQuestion";
import QuestionDetail from "./pages/QuestionDetail";
import QuestionEdit from './pages/QuestionEdit';
import Login from './pages/Login';
import Register from "./pages/Register";
import ProtectedRouteForProfile from './pages/ProtectedRouteForProfile';
import ProtectedRouteForAuth from './pages/ProtectedRouteForAuth';
import MyQuestions from './pages/MyQuestions';
import { useEffect } from "react";
import { useQuestion } from "./context/QuestionContext";
import { useUser } from "./context/UserContext";

function App() {

  const {
    questions,
    setQuestions,
    answer,
    setAnswer
  } = useQuestion();

  const {
    isLoggedIn,
    setIsLoggedIn,
    userInfo,
    setUserInfo,
    loggedInUser,
    setLoggedInUser
  } = useUser();


  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
    localStorage.setItem("answer", JSON.stringify(answer));
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    localStorage.setItem("loggedInUser", loggedInUser);
  }, [questions, answer, isLoggedIn, userInfo, loggedInUser]);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/forum' element={<Forum />} />
        <Route path='/forum/:q_id' element={<QuestionDetail />} />
        <Route element={<ProtectedRouteForProfile />}>
          <Route path='/profile' element={<Profile />}></Route>
        </Route>
        <Route path='/new' element={<NewQuestion />} />
        <Route path='/ques-edit' element={<QuestionEdit />} />
        <Route element={<ProtectedRouteForAuth />}>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Route>
        <Route path='/my-ques' element={<MyQuestions />} />


      </Routes>
    </Router>
  );
}

export default App;
