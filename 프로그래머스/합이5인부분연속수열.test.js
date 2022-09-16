/*

문제 : 특정한 합을 가지는 부분 연속 수열 찾기
자료:  자연수로 구성된 숫자 배열

투 포인터 : 리스트에 순차적으로 접근해야 할 때 두개의 점을 이용해 위치를 기록하면서 처리하는 기법
*/

const solution = (numbers, m) => {
  let result = 0;
  let sum = 0;
  let end = 0;

  for (let start = 0; start < numbers.length; start++) {
    while (sum < m && end < numbers.length) {
      sum = sum + numbers[end];
      end = end + 1;
    }
    if (sum === m) {
      result = result + 1;
    }
    sum = sum - numbers[start];
  }

  return result;
};

describe('합이 5인 부분 연속 수열의 개수를 구하라', () => {
  it('배열과 특정합을 입력받을 경우 연속 수열의 갯수를 출력함', () => {
    expect(solution([1, 2, 3, 2, 5], 5)).toBe(3);
  });
});
