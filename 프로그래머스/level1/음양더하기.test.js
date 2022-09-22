/*
문제 : 정수들의 합을 구하라
자료 : 정수 배열 absolutes, boolean 배열 signs
조건 : 
signs의 길이는 absolutes의 길이와 같습니다
signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미

계획 :
for문으로 signs[i]가 true면 absolutes[i] * 1을 , false 면 * -1을 한 배열의 합을 리턴함

반성 :
배열에 새로 추가할 필요없이 합을 구할수있는 방법이 있었다니...
forEach 사용해서 푸는법을 알게 돼서 좋다.

*/

const solution = (absolutes, signs) => {
  let answer = [];
  for (let i = 0; i < signs.length; i++) {
    answer.push(signs[i] ? absolutes[i] * 1 : absolutes[i] * -1);
  }

  return answer.reduce((acc, cur) => acc + cur);
};

// forEach
const solution2 = (absolutes, signs) => {
  let answer = 0;

  absolutes.forEach((v, i) => {
    signs[i] ? (answer += v) : (answer -= v);
  });

  return answer;
};

test('처음풀이', () => {
  expect(solution([4, 7, 12], [true, false, true])).toBe(9);
  expect(solution([1, 2, 3], [false, false, true])).toBe(0);
});

test('forEach', () => {
  expect(solution2([4, 7, 12], [true, false, true])).toBe(9);
  expect(solution2([1, 2, 3], [false, false, true])).toBe(0);
});
