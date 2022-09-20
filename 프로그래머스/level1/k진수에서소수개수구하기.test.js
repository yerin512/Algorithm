/* 

문제 : 숫자 n을 k진수로 바꿨을 때 조건에 맞는 소수가 몇 개인지 구하라

자료 : 
양의 정수 n
k진수

조건 :
0P0처럼 소수 양쪽에 0이 있는 경우
P0처럼 소수 오른쪽에만 0이 있고 왼쪽에는 아무것도 없는 경우
0P처럼 소수 왼쪽에만 0이 있고 오른쪽에는 아무것도 없는 경우
P처럼 소수 양쪽에 아무것도 없는 경우
단, P는 각 자릿수에 0을 포함하지 않는 소수입니다.
예를 들어, 101은 P가 될 수 없습니다.
+ 1은 소수가 아니다

계획: 
n.toString(k)로 k진법으로 변환
211020101011 이 나오면
split(0)을 하는데
배열에 1과 공백이 있으면 제거하고
반복문을 돌려서
소수를 판단한 걸 count로 센다.

Math.sqrt(number) 숫자의 제곱근을 반환


*/

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};
const solution = (n, k) => {
  const number = n
    .toString(k)
    .split('0')
    .filter((i) => i !== '1' && i !== '');

  return number.filter((v) => isPrime(+v)).length;
};

test('정수 n과 k를 입력받으면 조건에 맞는 소수의 갯수가 출력됨', () => {
  expect(solution(437674, 3)).toBe(3);
  expect(solution(110011, 10)).toBe(2);
});
