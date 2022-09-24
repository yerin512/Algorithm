/*
문제 : 행렬 덧셈의 결과를 반환하라
자료 : 행과 열의 크기가 같은 arr1, arr2
조건 : 행과 열의 크기가 같다
계획 : 반복문으로  배열의 배열안에 합을 push()한다.

반성 :
map()을 반복해서 쓸 수있을 거란 생각을 안 해봤었고,
또다른 배열을 선언할 필요없이 [[]] 이렇게 선언할 수도 있는 것 또한 처음 알았다.
문서를 찾아보고 다시 한 번 문제를 풀어봐야겠다.

*/

// 처음풀이
const solution = (arr1, arr2) => {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    let sum = [];
    for (let j = 0; j < arr1[i].length; j++) {
      sum.push(arr1[i][j] + arr2[i][j]);
    }
    result.push(sum);
  }

  return result;
};

// sum을 반복문 안에 선언하지 않아 처리가 되지않음;;
const solution2 = (arr1, arr2) => {
  let result = [];
  let sum = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      sum.push(arr1[i][j] + arr2[i][j]);
    }
    result.push(sum);
  }

  return result;
};

// 다른사람풀이 - sum이란 배열 없이
const solution3 = (arr1, arr2) => {
  var answer = [[]];
  for (var i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (var j = 0; j < arr1[i].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
};

// 다른사람풀이 - map()
const solution4 = (arr1, arr2) => {
  return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
};

test('처음풀이', () => {
  expect(
    solution4(
      [
        [1, 2],
        [2, 3],
      ],
      [
        [3, 4],
        [5, 6],
      ],
    ),
  ).toStrictEqual([
    [4, 6],
    [7, 9],
  ]);
  expect(solution4([[1], [2]], [[3], [4]])).toStrictEqual([[4], [6]]);
});
