import React from 'react';
import Question from './components/Question';
import Judgement from './components/Judgement';
import questionJson from '../../public/question.json';
import { RecoilRoot, useRecoilValue } from "recoil";

const questionPage = () => {
  return (
    <RecoilRoot>
    <div>
      {questionJson.data.map((questions) => (
        <Question key={questions.id} {...questions} />
      ))}
    </div>
    <Judgement/>
    </RecoilRoot>
  );
}

export default questionPage;