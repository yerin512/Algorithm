/*
문제 : a와 b의 내적을 구하라
자료 : 길이가 같은 두 1차원 정수 배열 a, b
조건 : 
a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]
n은 a, b의 길이
계획 : 반복문

반성 : reduce는 왜 해도해도 바로 떠오르지않는 건지!!

*/

const solution = (a, b) => {
  // 값을 저장할 변수 선언
  let result = 0;
  // 반복문
  for (let i = 0; i < a.length; i++) {
    result = result + a[i] * b[i];
  }
  // 저장된 계산의 값을 리턴한다.
  return result;
};

// reduce
const solution2 = (a, b) => {
  return a.reduce((acc, cur, i) => acc + cur * b[i], 0);
};

test('처음풀이', () => {
  expect(solution([1, 2, 3, 4], [-3, -1, 0, 2])).toBe(3);
  expect(solution([-1, 0, 1], [1, 0, -1])).toBe(-2);
});

test('reduce', () => {
  expect(solution2([1, 2, 3, 4], [-3, -1, 0, 2])).toBe(3);
  expect(solution2([-1, 0, 1], [1, 0, -1])).toBe(-2);
});
