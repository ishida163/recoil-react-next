import React from 'react';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { storeAnswer } from "../states/answer";

// 診断結果判定
const Judgement = () => {
    const useAnswer = useRecoilValue(storeAnswer);
    let countA = 0;
    let countB = 0;
    let countC = 0;
    let countD = 0;

    console.clear()
    console.log(useAnswer)

    // 各タイプ集計処理
    for (let i = 0; i < useAnswer.length; i++) {
      switch (useAnswer[i].type) {
        case "A": 
          console.log('Aタイプカウント+1')
          countA++;
          break;
        case "B":
          console.log('Bタイプカウント+1')
          countB++;
          break;
        case "C":
          console.log('Cタイプカウント+1')
          countC++;
          break;
        case "D":
          console.log('Dタイプカウント+1')
          countD++;
          break;   
        }
    }
  
    console.log('countA: ' + countA)
    console.log('countB: ' + countB)
    console.log('countC: ' + countC)
    console.log('countD: ' + countD)

    // 該当タイプ判定処理(最大値で該当タイプを判定)
    let max = countA;
    let maxTypeName = 'あなたはAタイプです'
    
    // 残りの値と比較し、より大きい値があれば最大値を更新する
    if (countB > max) {
      max = countB;
      maxTypeName = 'あなたはBタイプです'
    }
    if (countC > max) {
      max = countC;
      maxTypeName = 'あなたはCタイプです'
    }
    if (countD > max) {
      max = countD;
      maxTypeName = 'あなたはDタイプです'
    }

    console.log(maxTypeName)

    return(
        <>
        </>
    )

}

export default Judgement;
