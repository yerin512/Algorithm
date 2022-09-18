const run = (n, k, count = 0) => {
  if (n === 1) {
    return count;
  }

  if (n === k) {
    // eslint-disable-next-line no-return-assign
    return run(n / k, k, (count += 1));
  }

  if (n % k === 0) {
    // eslint-disable-next-line no-return-assign
    return run(n / k, k, (count += 1));
  }
  // eslint-disable-next-line no-return-assign
  return run((n -= 1), k, (count += 1));
};

const solution = (n, k) => run(n, k);

describe('N이 1이 될때까지 1번, 2번 과정을 수행해야하는 횟수의 최솟값을 구해라', () => {
  it('N과 K가 주어졌을 때 최소횟수를 리턴함', () => {
    expect(solution(25, 5)).toBe(2);
    expect(solution(33, 3)).toBe(5);
    expect(solution(8, 4)).toBe(2);
    expect(solution(23, 4)).toBe(6);
  });
});
