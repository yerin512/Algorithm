const solution = (position, direction, map) => {
  // 움직임 값 (Move X, Y)
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // 맵(0: 땅, 1: 벽), 방문 체크(0: 미방문, 1: 방문)
  const visit = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  // 시작 지점 방문 처리
  visit[position[0]][position[1]] = 1;
  let count = 1;

  // 반시계 방향으로 회전하는 함수
  const turn = () => {
    direction -= 1;
    if (direction < 0) direction = 3;
  };

  // 회전 횟수
  let turnCount = 0;
  while (true) {
    // 반시계 방향 회전
    turn();
    turnCount += 1;
    // 회전 후 이동 계산 (Next X, Y)
    let [nx, ny] = [position[0] + dx[direction], position[1] + dy[direction]];

    // 이동할 방향이 벽이 아니면서, 방문하지 않은 경우
    if (map[nx][ny] === 0 && visit[nx][ny] === 0) {
      position = [nx, ny];
      visit[nx][ny] = 1;
      count += 1;
      turnCount = 0;
    }

    // 네 방향 모두 확인한 경우
    if (turnCount === 4) {
      // 돌아갈 위치 계산 (Next X, Y)
      [nx, ny] = [position[0] - dx[direction], position[1] - dy[direction]];

      // 돌아갈 곳이 벽인 경우
      if (map[nx][ny] === 1) return count;

      position = [nx, ny];
      turnCount = 0;
    }
  }
};

describe('이동을 마친 후 캐릭터가 방문한 칸의 수를 출력함', () => {
  it('N, M과 2차원 배열이 주어지면 방문한 칸의 수를 출력함', () => {
    expect(
      solution([1, 1], 0, [
        [1, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 1, 0, 1],
        [1, 1, 1, 1],
      ]),
    ).toBe(3);
  });
});
