const steps = [
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [2, 1],
  [2, -1],
];

const run = (moves, count = 0) => {
  if (moves.length === 0) {
    return count;
  }

  const [dx, dy] = moves[0];

  if ([dx, dy].every((element) => element >= 1 && element <= steps.length)) {
    count += 1;
    return run(moves.slice(1), count);
  }

  return run(moves.slice(1), count);
};

const solution = (position) => {
  const x = position[0].charCodeAt(0) - 96;
  const y = position[1];

  const moves = steps.map(([dx, dy]) => [Number(x) + dx, Number(y) + dy]);

  return run(moves);
};

describe('나이트가 이동할 수 있는 경우의 수를 구함', () => {
  it('위치가 문자열로 주어지면 이동할 수 있는 경우의 수를 출력함', () => {
    expect(solution('a1')).toBe(2);
  });
});
