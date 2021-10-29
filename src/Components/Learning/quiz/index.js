import React,{useState , useEffect} from "react";
import './quiz.css'
import { Questionner } from "./Question";

const API_URL1 = 'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple';
function Quiz() {
    const [questions , setQuestions] = useState([]);
    const [currentIndex , setCurrentIndex] = useState(0);
    const [score , setScore] = useState(0);
    const [showAnswers , setShowAnswers] = useState(false);
    useEffect(()=>{
        fetch(API_URL1).then((res)=> res.json())
        .then((data)=>{
            console.log(data)
            setQuestions(data.results);
        });
    },[]);
    const handleAnswer = (answer) =>{
        const newIdex=currentIndex+1; 
        setCurrentIndex(newIdex);
        setShowAnswers(true);
        if(showAnswers === true){
            if(answer === questions[currentIndex].correct_answer){
                setScore(score+1);
            }
        }
        
    }
    console.log(showAnswers)
    return( questions.length > 0 ?
    <div className="body">
        <div className="container ">
        {
            currentIndex >= questions.length ? 
            <div>Điểm của bạn là : {score}</div>
            :<Questionner data={questions[currentIndex]}
            handleAnswer={handleAnswer}
            showAnswer ={showAnswers}
            >
            </Questionner>
        }
        </div>
    </div>
    :<div>Loading.....</div>
    )
}
export default Quiz;
