/*
문제 : left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고,
 약수의 개수가 홀수인 수는 뺀 수를 return
자료 : 두 정수 left와 right
조건 : 
계획 : 

반성 :

*/

// const solution = (left, right) => {
//   let count = 0;
//   let result = 0;
//   for (let i = left; i <= right; i++) {
//     for (let j = 1; j <= i; j++) {
//       if (i % j === 0) {
//         console.log(i, count);
//         count += 1;
//       }
//     }
//     if (count % 2 === 0) {
//       result += i;
//     }
//   }

//   return result;
// };

const solution = (left, right) => {
  let sum = 0;
  // 약수 구하는 법. left rgiht 순회하면서 1부터 i까지 커지는 j가 있다고하면  i % j  === 0 이면 약수인 숫자 횟수에 추가
  // 횟수 % 2 === 0이면 합을 더함
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count = count + 1;
      }
    }
    if (count % 2 === 0) {
      console.log(i);
      sum = sum + i;
    } else {
      sum = sum - i;
    }
  }
  return sum;
};

// 다른 사람 풀이
const solution2 = (left, right) => {
  // 일단 전체의 합계를 다 더하고 거기서 제곱수인걸 빼줌. 제곱근이 정수면 약수의 개수가 홀수라서.
  let sum = ((left + right) / 2) * (right - left + 1);

  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      console.log(sum, i);
      sum = sum - i * 2;
    }
  }

  return sum;
};

test('처음풀이', () => {
  expect(solution(13, 17)).toBe(43);
  expect(solution(24, 27)).toBe(52);
});

test('전체합', () => {
  expect(solution2(13, 17)).toBe(43);
  expect(solution2(24, 27)).toBe(52);
});
3;
