import React from 'react';

interface QuestionProps {
  id: number;
  question: string;
  type: string;
}

const Question: React.FC<QuestionProps> = ({ id, question, type }) => (
  <div>
    <h3>{`Question ${id}`}</h3>
    <p>{`Type: ${type}`}</p>
    <p>{question}</p>
  </div>
);

export default Question;
