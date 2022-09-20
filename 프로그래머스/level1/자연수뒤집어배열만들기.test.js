/*
문제 : 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 만들어라
자료 : 자연수 n
계획 : 

배열의 순서를 반전
reverse()
반복문

문자열로 바꾸는 법
1. String(n)
2. n.toString()
3. (n+"")

숫자로 바꾸는 법
1. map((v) => parseInt(v));
2. map(v => +v);
*/

const solution = (n) => {
  const numbers = String(n).split('');
  let reverse = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    reverse.push(Number(numbers[i]));
  }

  return reverse;
};

// for문대신 map을 사용
const solution2 = (n) => {
  return (n + '')
    .split('')
    .reverse()
    .map((v) => parseInt(v));
};

// 숫자 풀이
const solution3 = (n) => {
  var arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
};

test('자연수 N을 입력받으면, 거꾸로된 배열을 출력함', () => {
  expect(solution(12345)).toStrictEqual([5, 4, 3, 2, 1]);
});

test('for문대신 map을 사용', () => {
  expect(solution2(12345)).toStrictEqual([5, 4, 3, 2, 1]);
});

test('숫자풀이', () => {
  expect(solution3(12345)).toStrictEqual([5, 4, 3, 2, 1]);
});
