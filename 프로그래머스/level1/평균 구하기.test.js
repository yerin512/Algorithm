/* 

문제 : 정수를 담고있는 배열 arr의  평균값을 구하라

자료 : 
arr은 길이 1 이상, 100 이하인 배열

계획 : 
각 배열을 더해서 나누기 length


*/

const solution = (arr) => {
  return arr.reduce((acc, cur) => acc + cur) / arr.length;
};

test('숫자를 담은 배열을 입력하면 평균값이 정수로 출력됨', () => {
  expect(solution([1, 2, 3, 4])).toBe(2.5);
  expect(solution([5, 5])).toBe(5);
});
