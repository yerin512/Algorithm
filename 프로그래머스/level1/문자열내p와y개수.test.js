/*

문제 : 
 대문자와 소문자가 섞여있는 문자열 s .
 s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성

자료 : 
 알파벳으로만 이루어진 문자열 s
조건 :
 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return
 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴
 수를 비교할 때 대문자와 소문자는 구별하지 않습니다

계획 : 
 정규식을 이용해 p와 y를 몇개 가지고 있는지 확인
 비교해서 true, false 리턴함

반성 :
정규표현식을 사용해서 푼 문제가 10문제가 넘어가는 거 같은데 
또 정규식을 바로 사용하지못하고 검색해서 썼다.

*/

const solution = (str) => {
  let p = str.match(/p/gi)?.length;
  let y = str.match(/y/gi)?.length;
  if (!p && !y) {
    return true;
  }

  return p === y;
};

// 다른 사람 풀이 - toUpperCase() 이용
const solution2 = (str) => {
  return str.toUpperCase().split('P').length === str.toUpperCase().split('Y').length;
};

test('문자열을 입력받아 p의 개수와 y의 개수를 비교해 같으면 True, 다르면 False를 return ', () => {
  expect(solution('pPoooyY')).toBe(true);
  expect(solution('Pyy')).toBe(false);
});

test('toUpperCase() 이용 ', () => {
  expect(solution2('pPoooyY')).toBe(true);
  expect(solution2('Pyy')).toBe(false);
});
