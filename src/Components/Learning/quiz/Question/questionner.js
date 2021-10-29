import React from "react";
import Button from '@mui/material/Button';

const Questionner = ({
    showAmswer,
    handleAnswer,
    data : {question ,correct_answer,incorrect_answers}}) =>{
    const shuffleAnswer = [correct_answer , ...incorrect_answers].sort(()=> Math.random() - 0.5);
    console.log(showAmswer)
        return (
            <div className="card cardtest" >
                <div className="card-body">
                    <div className="cauhoi"><h2>Câu Hỏi</h2></div>
                    <div className="cauhoi"><h3 dangerouslySetInnerHTML={{__html:question}} /></div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="traloi-dong1" >
                            {shuffleAnswer.map((answer,index)=>{
                                const bgColor = showAmswer === true ? 
                                answer === correct_answer ?
                                "success" : "error":"inherit";

                                const  variantColor = showAmswer ? 
                                answer === correct_answer ?
                                "contained" : "contained":"outlined"
                                return(
                                <Button key={index} 
                                    color={//answer === correct_answer ?"success" : "error"
                                        bgColor
                                    } 
                                    variant={//answer === correct_answer ?"contained" : "contained"
                                        variantColor
                                    }
                                    className=" col-xs-5 col-sm-5 col-md-5 col-lg-5" 
                                    answer = {answer[0]}
                                    onClick = {()=> handleAnswer(answer)}
                                    >
                                        {answer}
                                </Button>
                            )})}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
export default Questionner;