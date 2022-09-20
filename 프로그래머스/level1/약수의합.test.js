/* 

문제 : 정수 n을 입력받아 n의 약수를 모두 더한 값을 구하라

자료 : 정수 n

계획 : 
n을 반복문을 돌려서 나눠서 i로 나눠서 % 가 0이면 더해준다.


*/

const solution = (n) => {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result = result + i;
    }
  }

  return result;
};

test('정수 n을 입력받아 n의 약수를 모두 더한 값을 구하라', () => {
  expect(solution(12)).toBe(28);
  expect(solution(5)).toBe(6);
});
