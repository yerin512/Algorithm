/*

- 문제 : 주어진 동전들로 만들 수 없는 양의 정수 금액 중 최솟값을 구하라
- 자료 : 
동전 값들로 이루어진 배열 s
동전의 수 n


- 조건: 

- 계획:
숫자들을 오름차순 한다.
모든 원소들의 합의 나열 중
포함되어있지 않은 숫자를 찾는다.
반복문으로 n , n+ n[i +1], 
배열을 한차례 씩 더해보고 


- 반성


*/

const solution = (s) => {
  const numbers = s.split(' ').map((x) => Number(x));
  numbers.sort((a, b) => a - b);

  let target = 1;
  for (let i = 0; i < numbers.length; i += 1) {
    if (target < numbers[i]) {
      break;
    }
    target += numbers[i];
  }
  return target;
};

describe('주어진 동전들로 만들 수 없는 양의 정수 금액 중 최솟값을 구하라', () => {
  it('동전이 주어질 경우 만들 수 없는 양의 정수 금액 중 최솟값을 구함', () => {
    expect(solution('3 2 1 1 9')).toBe(8);
  });
});
