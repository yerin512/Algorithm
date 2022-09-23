/*
문제 : numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 찾아라
자료 : 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers
조건 : 
0 ≤ numbers의 모든 원소 ≤ 9 
1 ≤ numbers의 길이 ≤ 9
numbers의 모든 원소는 서로 다름

계획 :
재귀함수나 반복문으로 10까지 하나씩 대입해서
없으면 10 - 원소 를 합해줌.

반성 :
전체 합에서 배열에 있는 것들의 합을 빼면 쉽게 구할수 있었던 문제
하지만 숫자 커지면 불가하니 includes로 푸는 것도 나쁘지않았던 거 같다.

*/

const solution2 = (arr) => 45 - arr.reduce((cum, crt) => cum + crt);

const solution = (arr) => {
  let answer = 0;
  for (let i = 0; i < 10; i++) {
    if (!arr.includes(i)) {
      answer += i;
    }
  }

  return answer;
};

test('처음풀이', () => {
  expect(solution2([1, 2, 3, 4, 6, 7, 8, 0])).toBe(14);
  expect(solution([5, 8, 4, 0, 6, 7, 9])).toBe(6);
});
