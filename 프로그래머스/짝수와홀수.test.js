/*
문제 : 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하라
자료 : 정수 num
조건 : 0은 짝수
계획 : 정수가 짝수인지 홀수인지 판별하여 return시킨다.
*/

const solution = (num) => {
  return num % 2 === 0 ? 'even' : 'odd';
};

test('정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하라', () => {
  expect(solution(3)).toBe('odd');
});
