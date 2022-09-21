/*
문제 : 문자열 s를 숫자로 변환하라
자료 : 부호(+,-)와 숫자로만 구성된 문자열 s
조건 :  
s의 길이는 1 이상 5이하입니다.
s는 "0"으로 시작하지 않습니다.
계획 :
Number() 쓰면 되는 거 아닌가??
- 와 + 때문인가??

반성 :
str/1 나 +str 등 다른 방법도 있다.
*/

const solution = (str) => {
  return Number(str);
};

test('문자열 s를 숫자로 변환하라', () => {
  expect(solution('1234')).toBe(1234);
  expect(solution('-1234')).toBe(-1234);
});
