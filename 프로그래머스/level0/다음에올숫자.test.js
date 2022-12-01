/* 
문제: 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자
조건: 2 < common의 길이 < 1,000
등차수열 혹은 등비수열이 아닌 경우는 없습니다.
공비가 0인 경우는 없습니다.


*/

function solution(common) {

  const sameMinus = common[1] - common[0] === common[2] - common[1];
  if (sameMinus) {
    return common[common.length - 1] + common[1] - common[0];
  } else {
    return common[common.length - 1] * (common[1] / common[0]);
  }
}

describe('문자열의 가운데 글자를 구하라', () => {
  it('문자열을 인자로 주면 가운데 글자를 리턴함', () => {
    expect(solution([1, 2, 3, 4])).toBe(5);
    expect(solution([2, 4, 8])).toBe(16);
  });
});
