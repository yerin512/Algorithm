/*
문제 : n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x을 구하라
자료 : 자연수 n
조건 : n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수를 구해야함
계획 : 
n % 1 === 1 인 수를 반복문을 돌려 찾는다.

반성 : i가 순차적으로 커지는 거라 1을 만나자마자 리턴 되는 게 가장 작은 숫자일텐데
첫풀이를 굳이 배열에 모든 경우의 수를 집어넣어
최솟값을 찾는 뻘짓을 했다...


*/

const solution = (n) => {
  let result = [];
  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      result.push(i);
    }
  }

  return Math.min(...result);
};

const solution2 = (n) => {
  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
};

// while문
const solution3 = (n) => {
  let i = 1;
  while (i < n) {
    i++;
    if (n % i === 1) {
      return i;
    }
  }
};

// while문
const solution3_1 = (n, x = 1) => {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
};

const solution4 = (n) => {
  let i = 0;
  do {
    i++;
    if (n % i === 1) {
      return i;
    }
  } while (i < n);
};

// // 재귀함수 - 통과안됨
// const solution3 = (n, x = 1) => {
//   x++;
//   if (n % x === 1) {
//     return x;
//   }

//   return solution3(n, x);
// };

test('처음풀이', () => {
  expect(solution(10)).toBe(3);
  expect(solution(12)).toBe(11);
});

test('다시 풀이', () => {
  expect(solution2(10)).toBe(3);
  expect(solution2(12)).toBe(11);
});

test('while', () => {
  expect(solution3(10)).toBe(3);
  expect(solution3(12)).toBe(11);
});

test('dowhile', () => {
  expect(solution4(10)).toBe(3);
  expect(solution4(12)).toBe(11);
});
