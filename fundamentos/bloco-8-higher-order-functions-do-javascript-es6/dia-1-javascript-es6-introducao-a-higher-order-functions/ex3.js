const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const func = (respostaA, respostaB) => {
    for(let i = 0; i <= respostaA; i += 1) {
        let point = 0;
        let countA = respostaA[i];
        for(let b = 0; b <= respostaB; b += 1) {
            let countB = respostaB[b];
            if (countA === countB) {
                point += 1;
            }else if(countB === 'N.A') {
               point += 0;
            } else {
               point -= 0.5;
            }
        }
    }
    return point; 
};

console.log(func(RIGHT_ANSWERS, STUDENT_ANSWERS));
