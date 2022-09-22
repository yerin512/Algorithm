/*
문제 : a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 구해라
자료 : 정수 a, b
조건 : 
a와 b의 대소관계는 정해져있지 않습니다.
a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
계획 :
 a와 b중에 큰 숫자를 max 작은숫자를 min으로 저장해서
 for문을 돌려서 합을 리턴함
반성 :


*/

const solution = (a, b) => {
  const max = Math.max(a, b);
  const min = Math.min(a, b);

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum = sum + i;
  }

  return sum;
};

const solution2 = (a, b) => {
  let sum = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum = sum + i;
  }

  return sum;
};

test('처음 풀이', () => {
  expect(solution(3, 5)).toBe(12);
  expect(solution(3, 3)).toBe(3);
  expect(solution(5, 3)).toBe(12);
});

test('두 번째 풀이', () => {
  expect(solution2(3, 5)).toBe(12);
  expect(solution2(3, 3)).toBe(3);
  expect(solution2(5, 3)).toBe(12);
});
