const solution = (num) => {
  let count = 0;

  // for 문 효율적으로 뱌꿔보기

  for (let h = 0; h <= num; h++) {
    for (let m = 0; m < 60; m++) {
      for (let s = 0; s < 60; s++) {
        if ((String(h) + String(m) + String(s)).includes('3')) {
          count = count + 1;
        }
      }
    }
  }

  return count;
};

describe('3이 하나라도 들어가는 경우의 시각 수를 찾음', () => {
  it('정수 N을 받으면 모든 경우의 수를 리턴함', () => {
    expect(solution(5)).toBe(11475);
  });
});
