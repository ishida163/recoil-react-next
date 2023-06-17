import React from 'react';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { storeAnswer } from "../states/answer";
import { Answer } from '../../types/answer';

interface QuestionProps {
  id: number;
  question: string;
  type: string;
}

const Question = (props:QuestionProps) => {
  const useAnswer = useRecoilValue(storeAnswer);
  const setAnswer = useSetRecoilState(storeAnswer);

const handleClick = (id:number,yesno:boolean,type:string) => {

  setAnswer([...useAnswer,{id,yesno,type}])
  return
}

  return (
  <div>
    <h3>{`Question ${props.id}`}</h3>
    <p>{`Type: ${props.type}`}</p>
    <p>{props.question}</p>
    <button onClick={() => handleClick(props.id,true,props.type)}>YES</button>
    <button>NO</button>
    <hr/>
  </div>
  )
}

export default Question;