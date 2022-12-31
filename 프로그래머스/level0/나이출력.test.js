/* 
문제 : 나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성
자료 : number age
조건 : 
0 < age ≤ 120
나이는 태어난 연도에 1살이며 1년마다 1씩 증가
계획 : 
2022년 - age + 1 = 
*/

function solution(age) {
  return 2022 - age + 1
}

function solution2(age) {
    return new Date().getFullYear() - age + 1;
}

test('예제', () => {
  expect(solution(40)).toBe(1983);
  expect(solution(23)).toBe(2000)
});
