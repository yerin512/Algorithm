/*

- 문제 : 여행을 떠날 수 있는 그룹 수의 최댓값을 구하라
- 자료 : 
모험가의 수 N
모험가들의 공포도를 담은 배열


- 조건: 
공포도가 X인 모험가는 반드시 X명 이상으로 구성되어야함
꼭 모든 모험가들로 그룹을 만들 필요없음

- 계획:
가장 많은 그룹수를 만드는 방법: 공포도가 낮은 사람들 먼저 그룹을 만든다.
-> 어떻게? : 공포도가 낮은 사람순으로 정렬한다.
그룹의 최대치는 n개를 넘을 수 없다.
현재 그룹에 포함된 모험가의 수가 현재의 공포도 이상이라면, 그룹 결성


- 반성
공포도를 오름차순 정렬하는 거는 생각이 났으나


*/

// for문
const solution = (n, data) => {
  data.sort((a, b) => a - b);

  let group = 0;
  let member = 0;

  for (let i = 0; i < n; i += 1) {
    member += 1; // 그룹 안에 모험가 추가
    if (member >= data[i]) {
      // 현재 그룹에 포함된 모험가 수가 현재 공포도 이상이면
      group += 1;
      member = 0;
    }
  }

  return group;
};

// 재귀함수
const solution2 = (n, data, member = 0, group = 0, count = 0) => {
  data.sort((a, b) => a - b);

  if (count === n) {
    return group;
  }

  if (member >= data[count]) {
    group += 1;
    solution2(n, data, 0, group, count + 1);
  }

  return solution2(n, data, member + 1, group, count + 1);
};

describe('여행을 떠날 수 있는 그룹 수의 최댓값을 구하라', () => {
  it('모험가 수 n과 공포도 배열을 입력했을 때 결과값인 정수를 출력하라', () => {
    expect(solution(5, [2, 3, 1, 2, 2])).toBe(2);
    expect(solution2(5, [2, 3, 1, 2, 2, 2])).toBe(3);
  });
});
