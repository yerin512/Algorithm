// 문제
// 다양한 수로 이루어진 배열이 있을때 주어진 수들을 M번 더하여 가장 큰 수를 만드는 법칙이다.
// 단, 배열의 특정한 인덱스에 해당하는 수가 연속해서 K번을 초과하여 더해질 수 없다.

const solution = ([N, M, K], numbers) => {
  var result = 0;

  // 정렬 말고 찾는 것으로 해보기

  // numbers.sort((a, b) => b - a);
  // const [first, second] = numbers;
  const first = Math.max(...numbers);
  const copy_without_first = numbers.filter((number) => number !== first);
  const second = Math.max(...copy_without_first);

  // 재귀로 풀어보자
  //   while (M > 0) {
  //     result = result + first * (M > K ? K : M);
  //     M = M > K ? M - K : 0;

  //     if (M > 0) {
  //       result = result + second;
  //       M = M - 1;
  //     }
  //   }

  const getResult = (result) => {
    if (M < 1) {
      return result;
    }

    result = result + first * (M > K ? K : M);
    M = M > K ? M - K : 0;

    result = result + second;
    M = M - 1;
  };

  getResult(result);
  return result;
};

describe('큰 수의 법칙에 따른 결과를 출력하라.', () => {
  it('list가 [2, 4, 5, 4, 6], N = 5, M = 8, K =3일 경우', () => {
    expect(solution([5, 8, 3], [2, 4, 5, 4, 6])).toBe(46);
    expect(solution([5, 6, 3], [2, 4, 5, 4, 6])).toBe(6 + 6 + 6 + 5 + 6 + 6);
  });
});
