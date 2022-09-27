/*
문제 : 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력하라
자료 : 정수 n과 m
조건 : *문자로 나타낸다.
계획 : 
반복문으로 풀면 될 거같다.
반성 :
입출력으로 콘솔찍는 법을 몰라서 헤맸다...
그냥 solution 함수 리턴값으로 정답이 출력되게끔 테스트코드 짜서 했다.
반복문으로 풀고, 배열로도 풀고, repeat이용해서도 풀어봤다.
*/

// 배열추가후 join();
const solution = (n, m) => {
  let row = [];
  let column = [];

  for (let i = 0; i < n; i++) {
    row.push('*') * i;
  }

  for (let j = 0; j < m; j++) {
    column.push(row.join(''));
  }

  return column.join(`\n`);
};

// 반복문;
const solution2 = (n, m) => {
  let result = '';

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result += '*';
    }

    result += '\n';
  }

  return result;
};

// repeat()
const solution3 = (n, m) => {
  return ('*'.repeat(n) + '\n').repeat(m);
};

test('배열', () => {
  expect(solution3(5, 3)).toBe(`*****\n*****\n*****`);
});

test('반복문', () => {
  expect(solution3(5, 3)).toBe(`*****\n*****\n*****`);
});

test('repeat', () => {
  expect(solution3(5, 3)).toBe(`*****\n*****\n*****`);
});
