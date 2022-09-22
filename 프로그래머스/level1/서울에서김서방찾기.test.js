/*
문제 : String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수를 만들어라
자료 : seoul은 길이 1 이상, 1000 이하인 배열
조건 : "Kim"은 반드시 seoul 안에 포함되어 있습니다.
계획 : indexof 쓰면 되지 않나?

반성 : 
for문으로 찾을 생각을 못했는데 for문으로 찾는 방법도 있었구나!
findIndex 으로 찾을수 있는 방법도 있는지 처음 알았다.
*/

const solution = (seoul) => {
  return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
};

// findIndex
const solution2 = (seoul) => {
  return `김서방은 ${seoul.findIndex((s) => s === 'Kim')}에 있다`;
};

// for문
const solution3 = (seoul) => {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === 'Kim') {
      return `김서방은 ${i}에 있다`;
    }
  }
};

test('처음풀이', () => {
  expect(solution(['Jane', 'Kim'])).toBe('김서방은 1에 있다');
});

test('findIndex', () => {
  expect(solution2(['Jane', 'Kim'])).toBe('김서방은 1에 있다');
});
test('for문', () => {
  expect(solution3(['Jane', 'Kim'])).toBe('김서방은 1에 있다');
});
