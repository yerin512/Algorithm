// 문제
// 다양한 수로 이루어진 배열이 있을때 주어진 수들을 M번 더하여 가장 큰 수를 만드는 법칙이다.
// 단, 배열의 특정한 인덱스에 해당하는 수가 연속해서 K번을 초과하여 더해질 수 없다.

// eslint-disable-next-line no-unused-vars
const solution = ([N, M, K], numbers) => {
  let result = 0;

  // 정렬 말고 찾는 것으로 해보기

  // numbers.sort((a, b) => b - a);
  // const [first, second] = numbers;
  const first = Math.max(...numbers);
  const copyWithoutFirst = numbers.filter((number) => number !== first);
  const second = Math.max(...copyWithoutFirst);

  // 재귀로 풀어보자
  while (M > 0) {
    result += first * (M > K ? K : M);
    M = M > K ? M - K : 0;

    if (M > 0) {
      result += second;
      M -= 1;
    }
  }

  return result;
};

const calculateGreaterValue = (numbers) =>
  numbers.reduce(
    ([first, second], cur) => {
      if (first < cur) {
        return [cur, first];
      }

      if (second < cur) {
        return [first, cur];
      }

      return [first, second];
    },
    [0, 0],
  );

const run = (m, k, first, second, sum = 0) => {
  if (m <= 0) {
    return sum;
  }

  if (m >= k + 1) {
    return run(m - k - 1, k, first, second, sum + first * k + second);
  }

  if (m === k) {
    return run(m - k, k, first, second, sum + first * k);
  }

  return run(0, k, first, second, sum + first * m);
};

// eslint-disable-next-line no-unused-vars
const solution2 = ([n, m, k], numbers) => {
  const [first, second] = calculateGreaterValue(numbers);
  return run(m, k, first, second);
};

describe('큰 수의 법칙에 따른 결과를 출력하라.', () => {
  it('list가 [2, 4, 5, 4, 6], N = 5, M = 8, K =3일 경우', () => {
    expect(solution([5, 8, 3], [2, 4, 5, 4, 6])).toBe(46);
    expect(solution([5, 6, 3], [2, 4, 5, 4, 6])).toBe(6 + 6 + 6 + 5 + 6 + 6);
  });
});

test('calculateGreaterValue', () => {
  expect(calculateGreaterValue([2, 4, 5, 4, 6])).toEqual([6, 5]);
});

test('soluton2', () => {
  expect(solution2([5, 8, 3], [2, 4, 5, 4, 6])).toBe(46);
  expect(solution2([5, 6, 3], [2, 4, 5, 4, 6])).toBe(6 + 6 + 6 + 5 + 6 + 6);
});
