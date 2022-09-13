// -2, -1, 1, 1로 경우의 수 만들기?
let steps = [
  [2, 1],
  [2, -1],
  [-2, -1],
  [-2, 1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
];

const run = (x, y) => {
  let count = 0;

  let moves = steps.map(([dx, dy]) => [x + dx, y + dy]);

  // 재귀함수로 바꿔보기?
  while (true) {
    if (moves.length === 0) {
      return count;
    }

    const [dx, dy] = moves[0];

    // some
    if ([dx, dy].every((element) => element >= 1 && element <= moves.length)) {
      count = count + 1;
    }

    moves = moves.slice(1);
  }
};

const solution = (position) => {
  const x = position[0].charCodeAt(0) - 96;
  const y = position[1];

  return run(Number(x), Number(y));
};

describe('나이트가 이동할 수 있는 경우의 수를 구함', () => {
  it('위치가 문자열로 주어지면 이동할 수 있는 경우의 수를 출력함', () => {
    expect(solution('a1')).toBe(2);
  });
});
