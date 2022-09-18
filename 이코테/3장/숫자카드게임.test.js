const solution = (numbers) => {
  let result = 0;

  const minNumbers = numbers.map((array) => {
    return Math.min(...array);
  });

  result = Math.max(...minNumbers);

  return result;
};

describe('뽑은 숫자를 출력하라', () => {
  it('3 x 3 형태의 [3, 1, 2], [4, 1, 4], [2, 2, 2] 번호일 때', () => {
    expect(
      solution([
        [3, 1, 2],
        [4, 1, 4],
        [2, 2, 2],
      ]),
    ).toBe(2);
    expect(
      solution([
        [7, 3, 1, 8],
        [3, 3, 3, 4],
      ]),
    ).toBe(3);
  });
});
