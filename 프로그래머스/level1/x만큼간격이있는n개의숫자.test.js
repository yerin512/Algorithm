/*
문제 : 정수 x와 자연수 n을 입력 받았을 때, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 구하라
자료 : 정수 x, 자연수 n
조건 : 
계획 :
빈 배열에 반복문으로 x * i 만큼 추가하는데
배열의 length가 n만큼

반성 : map대신 reduce를 사용하는 방법이 미숙하다.

*/

const solution = (x, n) => {
  let result = [];

  for (let i = 1; i <= n; i++) {
    result.push(x * i);
  }

  return result;
};

// Array fill map
const solution2 = (x, n) => {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
};

// 재귀함수
const solution3 = (x, n, count = 1, array = []) => {
  array.push(x * count);

  if (count >= n) {
    return array;
  }

  return solution3(x, n, count + 1, array);
};

// test('x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트', () => {
//   expect(solution(2, 5)).toStrictEqual([2, 4, 6, 8, 10]);
//   expect(solution(4, 3)).toStrictEqual([4, 8, 12]);
//   expect(solution(-4, 2)).toStrictEqual([-4, -8]);
// });

// test('Array(n).fill(x)', () => {
//   expect(solution2(2, 5)).toStrictEqual([2, 4, 6, 8, 10]);
//   expect(solution2(4, 3)).toStrictEqual([4, 8, 12]);
//   expect(solution2(-4, 2)).toStrictEqual([-4, -8]);
// });

// test('재귀함수', () => {
//   expect(solution3(2, 5)).toStrictEqual([2, 4, 6, 8, 10]);
//   expect(solution3(4, 3)).toStrictEqual([4, 8, 12]);
//   expect(solution3(-4, 2)).toStrictEqual([-4, -8]);
// });
