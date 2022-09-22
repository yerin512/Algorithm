/*
문제 : 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 구하라
자료 :  
arr은 길이 1 이상인 배열
인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 

조건 : 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴
계획 : 
정렬을 한 다음에 index[0]을 제거한 걸 반환하면... 테스트에 걸리겠지.


반성 :

splice를 이용해 풀려다가 그냥 filter를 이용해서 풀고
splice를 쓴 사람의 풀이를 보고 다시 풀어봤다.
처음부터 나한테 익숙하지 않은 풀이 방법을 선택해봐야하는데...
그리고 처음에 계획했던 풀이는 역시나 테스트에 걸렸다. ㅎㅎ

*/

// const solution = (arr) => {
//   arr.sort((a, b) => b - a);
//   arr.pop();

//   return arr.length === 0 ? [-1] : arr;
// };

const solution = (arr) => {
  let answer = arr.filter((v) => v !== Math.min(...arr));

  return answer.length === 0 ? [-1] : answer;
};

const solution2 = (arr) => {
  arr.splice(arr.indexOf(Math.min(...arr), 1));

  return arr.length === 0 ? [-1] : arr;
};

test('처음풀이', () => {
  expect(solution([4, 3, 2, 1])).toStrictEqual([4, 3, 2]);
  expect(solution([10])).toStrictEqual([-1]);
});

test('splice 풀이', () => {
  expect(solution2([4, 3, 2, 1])).toStrictEqual([4, 3, 2]);
  expect(solution2([10])).toStrictEqual([-1]);
});
