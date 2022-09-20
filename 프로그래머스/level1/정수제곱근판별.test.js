/* 

문제 : n이 어떤 양의 정수 x의 제곱이면 x+1의 제곱, 아니면 -1을 리턴하라

자료 : 
정수 n (양의 정수 x의 제곱)

조건 : 제곱이 아니면 -1 반환

계획 : 
제곱근을 구해주는 Math.sqrt(number); 로 제곱근을 구해줌
Math.sqrt(144) = 12;
제곱근이 정수인지 판별함
정수면 x+1 의 제곱 아니면 -1 리턴


*/

const solution = (n) => {
  const num = Math.sqrt(n);

  if (num % 1 === 0) return (num + 1) * (num + 1);

  return Number.isInteger(num) ? Math.pow(num + 1, 2) : -1;
};

const solution2 = (n) => {
  const num = Math.sqrt(n);

  if (num % 1 === 0) return (num + 1) * (num + 1);

  return -1;
};

test('n이 어떤 양의 정수 x의 제곱이면 x+1의 제곱, 아니면 -1을 리턴하라', () => {
  expect(solution(121)).toBe(144);
  expect(solution(3)).toBe(-1);
});
