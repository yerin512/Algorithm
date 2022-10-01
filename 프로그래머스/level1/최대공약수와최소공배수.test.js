/*
문제 : 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하라
자료 : 정수 n, m
조건 : 두 수는 1이상 1000000이하의 자연수입니다.
계획 : 
최대공약수
반복문으로 1 을 제외한 i가 3과 12동시에 나누어떨어지는 수를
최대공배수
두 수, 혹은 그 이상의 여러 수의 공통인 배수 중 가장 작은 수
반성 :
1부터 시작하여 점차 lcm++하면서 각각의 두 수를 lcm으로 나누었을 때 나머지 값이 0인지를 비교
*/

const solution = (n, m) => {
  let gcd = ㅜ % b === 0 ? b : max(b, a % b);

  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
    }
  }

  return [gcd, (n * m) / gcd];
};

// 유클리드 호제법
const solution2 = (n, m) => {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return [gcd(n, m), lcm(n, m)];
};

test('처음풀이', () => {
  expect(solution(3, 12)).toStrictEqual([3, 12]);
  expect(solution(2, 5)).toStrictEqual([1, 10]);
});

test('유클리드 호제법', () => {
  expect(solution2(3, 12)).toStrictEqual([3, 12]);
  expect(solution2(2, 5)).toStrictEqual([1, 10]);
});
