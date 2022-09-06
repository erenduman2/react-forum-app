import { useState, createContext, useContext, useEffect } from "react";

const QuestionContext = createContext();
const h1 = "Lorem ipsum dolor sit amet."
const h2 = "Lorem ipsum dolor sit amet."
const h3 = "Voluptates, voluptatem. Eveniet, error repellendus?"
const h4 = "Totam error sint fuga necessitatibus."

const q1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores saepe delectus enim, quaerat earum hic labore aut, doloribus aliquam dolor non quod. Ratione eveniet laboriosam voluptate dolor dicta animi provident deserunt quis asperiores, odit dolorum, ducimus officia quos sunt. Ipsum rem, expedita tempore ad voluptatum provident fuga deleniti assumenda mollitia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui culpa nobis deserunt nam dignissimos. Dolor totam autem at cum eos aliquid voluptate, laudantium laboriosam, odio veniam porro rem quod explicabo provident quo expedita non eaque. Deleniti beatae et itaque. Animi sunt pariatur laborum voluptas obcaecati eligendi ipsum unde doloremque tempore?"
const q2 = "Ut esse eligendi veritatis at minima magni praesentium sequi architecto atque nostrum adipisci vel eaque, facilis, iusto ad explicabo dolor illo fugit! Eos nesciunt, aperiam soluta iure voluptates itaque praesentium consequuntur rerum ipsa et quod doloribus, minus dolore dolores modi nulla saepe non libero quas provident. Ut, a alias. Blanditiis?"
const q3 = "Odit a perspiciatis quia rem maiores vero illo qui odio illum. Ea, sapiente non exercitationem totam officiis voluptates asperiores ipsum id alias aperiam fugiat autem quas ullam aut, aliquid sed repudiandae veniam. Numquam odit, magnam dicta fugit, consequatur mollitia minima nulla illum possimus obcaecati odio ipsum veritatis officiis ea qui."
const q4 = "Laudantium, esse debitis? Unde autem fugiat voluptates, aut obcaecati totam maiores molestias cupiditate fuga facilis dolorum quasi eos ipsum excepturi tempore vitae in vero, ab incidunt libero voluptatem! Neque maxime fugit nisi amet magnam aspernatur! Hic voluptatem, debitis magnam veritatis quod, praesentium nulla repellendus eum, facere et dicta voluptas voluptates."

const u1 = "erenduman";
const u2 = "erenduman";
const u3 = "dumaneren";
const u4 = "dumaneren";

const initial = [
    {
      question: q1,
      key: 0,
      header: h1,
      user: u1
    },
    {
        question: q2,
        key: 1,
        header: h2,
        user: u2
    },
    {
        question: q3,
        key: 2,
        header: h3,
        user: u3
      },
    {
        question: q4,
        key: 3,
        header: h4,
        user: u4
    },
]

const QuesitonProvider = ({children}) => {
    const [questions, setQuestions] = useState(JSON.parse(localStorage.getItem("questions")) ? JSON.parse(localStorage.getItem("questions")) : initial);
    const [answer, setAnswer] = useState(JSON.parse(localStorage.getItem("answer")) ? JSON.parse(localStorage.getItem("answer")) : []);

    const values = {
        questions,
        setQuestions,
        answer,
        setAnswer,
    }
    
    return(
        <QuestionContext.Provider value={values} > {children} </QuestionContext.Provider>
    )
}

const useQuestion = () => useContext(QuestionContext);

export {QuesitonProvider, useQuestion}