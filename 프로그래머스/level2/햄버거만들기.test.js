// 문제 : 상수가 포장하는 햄버거의 개수를 구하라
// 조건 : ingredient의 원소는 1, 2, 3 중 하나의 값이며, 순서대로 빵, 야채, 고기를 의미합니다.
// 계획 : 1231 이 연속 되는 걸 찾고 찾고 나면 또 다시 1231을 찾는다.
/*
*/

const solution = (ingredient) => {
  return run(ingredient.join(''));
};

const run = (str, count = 0) => {
  if (str === str.replace('1231', '0')) { 
    return count;
  }
  let result = str.replace('1231', '0');

  return run(result.replaceAll('0', ''), count + 1);
}

  test('햄버거를 만들자', () => {
    expect(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])).toBe(2);
    expect(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])).toBe(0);
    expect(solution([1, 1, 2, 1, 2, 3, 1, 3, 1, 2, 3, 1])).toBe(3);
    expect(solution([1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 1, 1, 2, 3, 3, 1, 2, 3, 1, 3, 3, 3, 2, 1, 2, 3, 1])).toBe(5);
    expect(solution([1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 1, 1, 2, 3, 3, 1])).toBe(3);
    expect(solution([1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1] )).toBe(3);
    expect(solution([1, 2, 2, 3, 1])).toBe(0);
  });
