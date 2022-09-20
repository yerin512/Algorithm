const solution = (lottos, win_nums) => {
  let max_rank = 0;
  let min_rank = 0;
  let answer = [];

  let zeroCount = 0;
  let winCount = 0;

  lottos.forEach((item) => (!item ? zeroCount++ : win_nums.includes(item) && winCount++));

  max_rank = 7 - (zeroCount + winCount) === 7 ? 6 : 7 - (zeroCount + winCount);
  min_rank = 7 - winCount === 7 ? 6 : 7 - winCount;

  answer = [max_rank, min_rank];

  return answer;
};

describe('당첨될 수 있는 최고순위와 최저 순위 구하기', () => {
  it('당첨번호가 31, 10, 45, 1, 6, 19고 구매번호가 44, 1, 0, 0, 31, 25 일 때', () => {
    expect(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])).toStrictEqual([3, 5]);
    expect(solution([0, 0, 0, 0, 0, 0], [31, 10, 45, 1, 6, 19])).toStrictEqual([1, 6]);
  });
});
