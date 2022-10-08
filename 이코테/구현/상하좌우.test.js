const moveCoordinates = {
  R: ([x, y]) => [x, y + 1],
  U: ([x, y]) => [x - 1, y],
  L: ([x, y]) => [x, y - 1],
  D: ([x, y]) => [x + 1, y],
};

const move = (moveType, position, n) => {
  const [dx, dy] = moveCoordinates[moveType](position);

  const isValid = (element) => element >= 1 && element <= n;

  if (![dx, dy].every(isValid)) {
    return position;
  }

  return [dx, dy];
};

// while 문으로 바꾸기
const run = (n, m, pos) => {
  let position = pos;
  let moves = m;

  while (true) {
    if (moves.length === 0) {
      return `${position[0]} ${position[1]}`;
    }

    position = move(moves[0], position, n);
    moves = moves.slice(1);
  }
};

const solution = (n, moveTypes) => {
  const moves = moveTypes.split(' ');
  return run(n, moves, [1, 1]);
};

describe('최종 도착지의 좌표를 구하라', () => {
  it('공간의 크기와 이동경로가 주어질 경우 도착지 좌표 값을 리턴함', () => {
    expect(solution(5, 'R R R U D D')).toBe('3 4');
  });
});
