/*
문제 : 자연수 N이 주어지면, N의 각 자릿수의 합을 구하라
자료 : 자연수 n
계획 : 
숫자를 배열로 만들어줘서 for문을 돌려 값들을 모두 합한다.
숫자를 배열로 만들려면 string 단계를 한 번 거친다.
숫자를 문자열로 만들기 위해 String() 를 이용한다.
*/

const solution = (n) => {
  return String(n)
    .split('') //split() 함수를 사용하여 문자열을 잘라서 배열로 리턴받습니다.
    .reduce((acc, cur) => acc + Number(cur), 0); // reduce를 이용해배열 원소들의 전체 합을 구함
};

test('자연수 N을 입력받으면, N의 각 자릿수의 합을 출력하라', () => {
  expect(solution(123)).toBe(6);
});
