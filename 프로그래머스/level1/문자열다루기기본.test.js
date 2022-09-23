/*
문제 : 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인하라
자료 : s는 길이 1 이상, 길이 8 이하인 문자열입니다.
조건 : s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.
계획 : if문으로 length가 4, 6이면 if문으로 숫자만 있는지 정규식으로 판단함 

반성 :
처음 풀이를 s.length === 6 대신 6만 넣어서 오래걸렸었다.
true false로 나타내기에는 정규식 test가 더 좋은 걸 한 번 더 깨달았다.
*/

function solution(s) {
  if (s.length === 4 || s.length === 6) {
    if (s.match(/[a-z]/gi)) {
      return false;
    } else {
      return true;
    }
  }

  return false;
}

function solution2(s) {
  if ((s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s)) {
    return true;
  }

  return false;
}

test('처음풀이', () => {
  expect(solution('a234')).toBe(false);
  expect(solution('1234')).toBe(true);
});

test('처음풀이', () => {
  expect(solution2('a234')).toBe(false);
  expect(solution2('1234')).toBe(true);
});
