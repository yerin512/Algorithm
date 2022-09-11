const moveCoordinates = {
  R: ([x, y]) => [x, y + 1],
  U: ([x, y]) => [x - 1, y],
  L: ([x, y]) => [x, y - 1],
  D: ([x, y]) => [x + 1, y],
};

const move = (moveType, position, n) => {
  const [dx, dy] = moveCoordinates[moveType](position);
  // 하나라도 되면 이전꺼 보내야함 some
  if (dx > n || dy > n || dx < 1 || dy < 1) {
    return position;
  }

  return [dx, dy];
};

let count = 0;

// while 문으로 바꾸기
const run = (n, moves, position) => {
  while (true) {
    moves.slice(1);

    if (moves.length === 0) {
      return `${position[0]} ${position[1]}`;
    }

    position = move(moves[0], position, n);
    return `${position[0]} ${position[1]}`;
  }
};

// 'R R R U D D'
const solution = (n, moveTypes) => {
  const moves = moveTypes.split(' ');
  return run(n, moves, [1, 1]);
};

describe('최종 도착지의 좌표를 구하라', () => {
  it('공간의 크기와 이동경로가 주어질 경우 도착지 좌표 값을 리턴함', () => {
    expect(solution(5, 'R R R U D D')).toBe('3 4');
    // expect(solution(5, 'U R D')).toBe('2 2');
  });
});
