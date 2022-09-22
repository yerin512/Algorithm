/*
문제 : array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수를 만들어라
자료 : arr은 자연수를 담은 배열, divisor는 자연수, 
조건 :  
정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j]
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환
계획 : 
반복문을 돌려 배열의 각 원소에서 5로 나누어 떨어지는 값들을 모아
새로운 배열 result에 넣고, 오름차순 하여 반환
반성 : 
filter로 먼저 하는게 더 간단한 풀이였을 거 같다.

*/

const solution = (arr, divisor) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      result.push(arr[i]);
    }
  }
  if (result.length === 0) {
    result.push(-1);
  }

  return result.sort((a, b) => a - b);
};

// filter
const solution2 = (arr, divisor) => {
  let answer = arr.filter((i) => i % divisor === 0);

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
};

test('처음풀이', () => {
  expect(solution([5, 9, 7, 10], 5)).toStrictEqual([5, 10]);
  expect(solution([2, 36, 1, 3], 1)).toStrictEqual([1, 2, 3, 36]);
  expect(solution([3, 2, 6], 10)).toStrictEqual([-1]);
});

test('filter', () => {
  expect(solution2([5, 9, 7, 10], 5)).toStrictEqual([5, 10]);
  expect(solution2([2, 36, 1, 3], 1)).toStrictEqual([1, 2, 3, 36]);
  expect(solution2([3, 2, 6], 10)).toStrictEqual([-1]);
});
