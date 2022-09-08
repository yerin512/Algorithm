const solution = (nums) => {
  let answer = 0;

  const maxLength = nums.length / 2;
  const setNumsLength = [...new Set(nums)].length;

  answer = setNumsLength > maxLength ? maxLength : setNumsLength;

  return answer;
};

describe('최대 고를 수 있는 폰켓몬 종류의 수', () => {
  it('배열에 따라 자연수가 리턴 됨', () => {
    expect(solution([3, 1, 2, 3])).toBe(2);
    expect(solution([3, 3, 3, 2, 2, 4])).toBe(3);
    expect(solution([3, 3, 3, 2, 2, 2])).toBe(2);
  });
});
