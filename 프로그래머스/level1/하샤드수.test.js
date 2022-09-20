/*

문제 : 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하라

자료 : 자연수 x

조건 : 조건에 일치하면 true, 아니면 false를 반환

계획 :
자릿수의 합을 더한 값이 원래값으로 나누어떨어지는지 확인
반복문으로 각자리수를 모두 한뒤 x % sum === 0이면 true  


반성 : 
문자열로 변환해서 풀면 시간이 오래걸리는데 숫자로 푸는 거는 익숙하지 않다.
이 풀이를 이용해서 자연수 뒤집어 배열만들기를 다시 한 번 풀어봐야겠다.


Math.floor(): 소수점 이하를 버림한다
Math.ceil(): 소수점 이하를 올림한다.
Math.round(): 소수점 이하를 반올림한다.

*/

const sum = (number) => {
  if (number < 10) {
    return number;
  }

  return (number % 10) + sum(Math.floor(number / 10));
};

// 숫자 풀이
const solution = (x) => {
  return x % sum(x) === 0;
};

// 문자 풀이
const solution2 = (x) => {
  const numbers = String(x).split('');
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + Number(numbers[i]);
  }

  return x % sum === 0;
};

test('정수 n과 k를 입력받으면 조건에 맞는 소수의 갯수가 출력됨', () => {
  expect(solution(10)).toBe(true);
  expect(solution(12)).toBe(true);
  expect(solution(11)).toBe(false);
  expect(solution(13)).toBe(false);
});

test('정수 n과 k를 입력받으면 조건에 맞는 소수의 갯수가 출력됨', () => {
  expect(solution2(10)).toBe(true);
  expect(solution2(12)).toBe(true);
  expect(solution2(11)).toBe(false);
  expect(solution2(13)).toBe(false);
});
