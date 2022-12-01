/*
문제 : 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지
조건 : n은 2 이상 100,000 이하인 자연수
계획 :
피보나치 수 함수를 따로 뺀다.

*/

/* 피보나치 수 dp  */
const fibonacci = (n) => {
  const result = [0, 1];
  for (let i = 0; i <= n; i++) {
    result.push((result[0 + i] + result[1 + i]) % 1234567);
  }

  return result;
};

const solution = (n) => {
  return Number(fibonacci(n)[n]);
};

// 반복문

const solution1 = (n) => {
  let fibo = [];

  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      fibo.push(0);
    }
    if (i === 1) {
      fibo.push(1);
    }
    fibo.push(fibo[i - 2] + fibo[i - 1]);
    fibo[i] % 1234567;
  }

  return fobo[n];
};

// 재귀함수로 만들어보시고(꼬리잡기 재귀함수?)
const solution2 = (n) => {
  return 2;
};

// while문
const solution3 = (n) => {};

test('연속된 자연수들로 n을 표현하는 방법의 수', () => {
  expect(solution(3)).toBe(2);
  expect(solution(5)).toBe(5);
});

test('재귀함수', () => {
  expect(solution2(3)).toBe(2);
  expect(solution2(5)).toBe(5);
});

test('while문', () => {
  expect(solution3(3)).toBe(2);
  expect(solution3(5)).toBe(5);
});
