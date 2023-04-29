import React from 'react';

interface QuestionProps {
  id: number;
  question: string;
  type: string;
}

const handleClick = (id:number,yesno:boolean) => {
  // 【TODO】親コンポーネント化にデータを送る　RecoilかReduxかuseContext
  return
}

const Question: React.FC<QuestionProps> = ({ id, question, type }) => (
  <div>
    <h3>{`Question ${id}`}</h3>
    <p>{`Type: ${type}`}</p>
    <p>{question}</p>
    <button onClick={() => handleClick(id,true)}>YES</button>
    <button onClick={() => handleClick(id,false)}>NO</button>
    <hr/>
  </div>
);

export default Question;
