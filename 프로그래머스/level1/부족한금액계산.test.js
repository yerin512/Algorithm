/*
문제 : 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지 구하시오
자료 : 
이용료는 price원
처음 가지고 있던 금액 money 
놀이기구의 이용 횟수 count 
조건 : 
놀이기구를 N 번 째 이용한다면 원래 이용료의 N배
금액이 부족하지 않으면 0을 return
계획 : 
처음 풀이에 적어뒀음

반성 :
좋은 방법들이 참 많군@!!

*/

const solution = (price, money, count) => {
  let sum = 0;
  // price + price*2 + price*3 + price * 4
  // 반복문으로 count만큼 더한 후  money에서 뺀다.
  for (let i = 1; i <= count; i++) {
    sum = sum + price * i;
  }
  return money - sum > 0 ? 0 : -(money - sum);
};

// 가우스 공식
const solution2 = (price, money, count) => {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
};

// Array.from
function solution3(price, money, count) {
  const expectedMoney = Array.from({ length: count }).reduce(
    (acc, _, idx) => (acc += (idx + 1) * price),
    0,
  );
  const gap = money - expectedMoney;

  return gap > 0 ? 0 : gap * -1;
}

test('처음풀이', () => {
  expect(solution(3, 20, 4)).toBe(10);
});

test('가우스 공식', () => {
  expect(solution2(3, 20, 4)).toBe(10);
});

test('Array from', () => {
  expect(solution3(3, 20, 4)).toBe(10);
});
