/*
문제 : 전화번호가 문자열 phone_number로 주어졌을 때, 
전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수를 만들어라

자료 : phone_number는 길이 4 이상, 20이하인 문자열
조건 : 뒷 4자리를 제외한 나머지 숫자를 전부 *로 가려라
계획 : map()을 이용해서... index [0]~ [8] 까진 *으로...
아니면 문자열을 반복문으로 바꿔...

반성 :
for문으로 푸는 건 풀었지만
다른 방식이 아예 생각이 안 났었다.
정규식을 이용하는 거나 repeat()도 처음알았고,
slice()는 매번 쓰는데도 헷갈렸었다...

*/

const solution = (phone_number) => {
  const answer = phone_number.split('');
  for (let i = answer.length; i >= 0; i--) {
    if (i < answer.length - 4) {
      answer[i] = '*';
    }
  }

  return answer.join('');
};

// 정규식 풀이
const solution2 = (phone_number) => {
  return phone_number.replace(/\d(?=\d{4})/g, '*');
};

// repeat() slice()
const solution3 = (phone_number) => {
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
};

test('처음풀이', () => {
  expect(solution('01033334444')).toBe('*******4444');
  expect(solution('027778888')).toBe('*****8888');
});

test('정규식', () => {
  expect(solution2('01033334444')).toBe('*******4444');
  expect(solution2('027778888')).toBe('*****8888');
});

test('repeat slice', () => {
  expect(solution3('01033334444')).toBe('*******4444');
  expect(solution3('027778888')).toBe('*****8888');
});
