/*
문제 : 주어진 수가 1이 될 때까지 작업을 몇 번이나 반복해야 하는지 반환하는 함수를 만들어라
자료 : 정수 num
조건 :
주어진 수가 1인 경우에는 0 return
작업을 500번 반복할 때까지 1이 되지 않는다면 –1 return

1-1. 입력된 수가 짝수라면 2로 나눕니다. 
1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다. 
2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다. 

계획 :
짝수인지 홀수인지 판별후 짝수면 2로 나눔 홀수면 3으로 나옴
이거를 계속 재귀로 반복?? ㄷㄷ

반성 :
처음 재귀 함수로 풀때 조건문 거는 걸 제대로 파악하지 못해서
시간이 좀 걸렸었다. 분하다...


*/

const solution = (num, count = 0) => {
  if (num === 1) {
    return count > 500 ? -1 : count;
  }

  return solution(num % 2 === 0 ? num / 2 : num * 3 + 1, count + 1);
};

// 재귀함수2
const solution2 = (num, count = 0) => {
  return num === 1
    ? count > 500
      ? -1
      : count
    : solution2(num % 2 === 0 ? num / 2 : num * 3 + 1, count + 1);
};

// while문
const solution3 = (num) => {
  let count = 0;
  while (true) {
    if (num === 1) {
      return count > 500 ? -1 : count;
    }

    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    ++count;
  }
};

test('주어진 수가 1이 될 때까지 몇 번 반복해야하는지 반환함', () => {
  expect(solution(6)).toBe(8);
  expect(solution(16)).toBe(4);
  expect(solution(626331)).toBe(-1);
});

test('재귀함수2풀이', () => {
  expect(solution2(6)).toBe(8);
  expect(solution2(16)).toBe(4);
  expect(solution2(626331)).toBe(-1);
});
test('while 풀이', () => {
  expect(solution3(6)).toBe(8);
  expect(solution3(16)).toBe(4);
  expect(solution3(626331)).toBe(-1);
});
