import React from 'react';
import Question from './components/Question';
import questionJson from '../../public/question.json';

const questionPage: React.FC = () => (
  <div>
    {questionJson.data.map((questions) => (
      <Question key={questions.id} {...questions} />
    ))}
  </div>
);

export default questionPage;