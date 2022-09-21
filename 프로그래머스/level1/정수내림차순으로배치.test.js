/*
문제 : n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 구하라
자료 : 정수 n
계획 : 
정수 n을 배열로 바꾼 후, sort이용
그리고 join을 문자열 - > 숫자로 바꿔줌

숫자풀이

나누어 떨어지는 값과 몫을 이용하여 푼다.
118372 % 10을 할경우 나머지는 2가된다.이걸 새로운 배열에 집어넣는다.
그리고 몫은 118372다 . 이거를 반복문에 넣는다.

반성 :
숫자풀이로 하는 게 속도가 더 빠른데 직접 짜는 게 너무 어렵다.

toString() - 문자타입으로 변환
split() - 문자열을 구분자로 잘라서 배열로 저장
sort() - 배열을 정렬
reverse() - 원소 순서를 반대로
join() - 배열 합치기
Number() - 숫자타입으로 변환



*/

const solution = (n) => {
  const numbers = String(n)
    .split('')
    .sort((a, b) => b - a)
    .join()
    .replace(/,/g, '');

  return Number(numbers);
};

const solution2 = (n) => {
  return parseInt((n + '').split('').sort().reverse().join(''));
};

const solution3 = (n, result = []) => {
  result.push(n % 10);

  if (n < 10) {
    return Number(result.sort((a, b) => b - a).join(''));
  }

  return solution3(Math.floor(n / 10), result);
};

test('문자열1', () => {
  expect(solution(118372)).toBe(873211);
});

test('문자열2', () => {
  expect(solution2(118372)).toBe(873211);
});

test('숫자 재귀함수', () => {
  expect(solution3(118372)).toBe(873211);
});
