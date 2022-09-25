/*
문제 : 문자열 내림차순으로 배치하기
자료 : 문자열 s
조건 : s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주
계획 : 정규식으로 소문자들만 sort() 한 다음에 정규식한 대문자랑 합침

반성 : 아직도 정규표현식이 익숙하지않아서 검색을 해서 풀었다. 따로 연습까지 해봤으니 이제는 바로바로 나오길!!!!

*/

const solution = (s) => {
  return s.split('').sort().reverse().join('');
};

const solution2 = (s) => {
  let uppercase = s.match(/[A-Z]/g).split('').sort().join('');
  let lowercase = s.match(/[a-z]/g).split('').sort().join('');

  return lowercase + uppercase;
};

test('처음풀이', () => {
  expect(solution('Zbcdefg')).toBe('gfedcbZ');
});

test('정규식', () => {
  expect(solution2('Zbcdefg')).toBe('gfedcbZ');
});
