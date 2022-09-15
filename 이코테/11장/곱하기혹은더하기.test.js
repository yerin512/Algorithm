/*

- 문제 : 숫자로만 이루어진 문자열 S가 주어졌을 때 결과적으로 만들어질 수 있는 가장 큰 수를 구하라
- 자료 :
숫자로 이루어진 문자열 S
연산기호

- 조건:
모든 연산은 왼쪽에서부터 순서대로 이루어짐

- 계획:

0이 있는 경우 연산자를 x 말고 +
재귀함수로 첫번쨰 문자열과 두번쨰 문자열을 계산하고
첫번쨰 두번쨰 숫자를 삭제하고
결과값과 첫번째를 계산하고

- 반성

*/

// 재귀
const solution = (s, result = 0) => {
  const first = Number(s.substring(0, 1));

  if (s.length === 0) {
    return result;
  }

  if ([first, result].some((i) => i === 0 || i === 1)) {
    result += first;
    return solution(s.slice(1), result);
  }

  result *= first;
  return solution(s.slice(1), result);
};

// for
const solution2 = (s) => {
  while (true) {
    const first = Number(s.substring(0, 1));
    s = s.slice(1);
    let result = 0;

    if (s.length === 0) {
      return result;
    }

    if (first <= 1 || result <= 1) {
      console.log('result + first', result + first);
      result += first;
    } else {
      console.log('result * first', result * first);
      result *= first;
    }
  }
};

// reduce

describe('숫자로만 이루어진 문자열 S가 주어졌을 때 결과적으로 만들어질 수 있는 가장 큰 수를 구하라', () => {
  it('숫자로 이루어진 문자열을 입력하면 결과값이 숫자로 출력됨', () => {
    expect(solution('02984')).toBe(576);
    expect(solution('567')).toBe(210);
    expect(solution('123')).toBe(9);
  });

  it('숫자로 이루어진 문자열을 입력하면 결과값이 숫자로 출력됨', () => {
    expect(solution2('02984')).toBe(576);
    expect(solution2('567')).toBe(210);
    expect(solution2('123')).toBe(9);
  });
});
