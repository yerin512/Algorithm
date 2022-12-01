// 문제 : 연속된 자연수들로 n을 표현하는 방법의 수
// 조건 : 연속된 자연수들의 합만 가능, 최소 1개
// 계획 :
/*
최소는 1개다 본인 포함.
*/

const solution = (n) => {
  let answer = 1;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++){
      
    }
  }

  console.log(answer);

  return answer;
};

describe('연속된 자연수들로 n을 표현하는 방법의 수', () => {
  it('자연수를 인자로 주면 가운데 글자를 리턴함', () => {
    expect(solution(15)).toBe(4);
  });
});
