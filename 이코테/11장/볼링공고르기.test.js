/*

- 문제 : N개의 공의 무게가 각각 주어질 때, 두 사람이 볼링공을 고르는 경우의 수를 구하라
- 자료 : 
N개의 공
1부터 M까지의 무게
각 볼링공의 무게 K가 공백으로 구분되어 주어짐


- 조건: 
서로 다른 무게의 공을 골라야함
같은 무게의 공이 여러개 있을 수 있지만 서로 다른 공으로 간주함



- 계획:
내 처음 계획 : 반복문으로 balls[i] balls[i+1] 이 같은 무게면 배열에서 제외함
2중 for문으로 구현한다.

- 반성
정답 풀이를 봐도 무슨 말인지 모르겠다.
이중 for문이 좋은 방법은 아닌 거 같은데 정답풀이는 무슨 말인지 모르겠다.
1부터 10까지의 무게를 담을 수 있는 리스트를 만들고
각 무게에 해당하는 볼링공의 개수 카운트해서
1부터 m까지의 각 무게에 대하여 처리
무게가 i인 볼링공의 개수(A가 선택할 수 있는 개수) 제외
# B가 선택하는 경우의 수와 곱하기

*/

const solution = (n, m, k) => {
  let count = 0;
  const balls = k.split(' ').map((n) => Number(n));
  balls.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (balls[i] !== balls[j]) {
        count = count + 1;
      }
    }
  }

  return count;
};

const solution2 = (n, m, k) => {
  const array = [0] * 10;

  console.log(array);

  array.forEach((element) => {
    array[element] += 1;
  });

  console.log(array);
};

// test('공의 갯수 N, 볼링공의 무게 M, 각 공의 무게 K가 주어졌을 때 두 사람이 볼링공을 고르는 경우의 수를 구하라', () => {
//   expect(solution(5, 3, '1 3 2 3 2')).toBe(8);
//   expect(solution(8, 5, '1 5 4 3 2 4 5 2')).toBe(25);
// });

test('공의 갯수 N, 볼링공의 무게 M, 각 공의 무게 K가 주어졌을 때 두 사람이 볼링공을 고르는 경우의 수를 구하라', () => {
  expect(solution2(5, 3, '1 3 2 3 2')).toBe(8);
  expect(solution2(8, 5, '1 5 4 3 2 4 5 2')).toBe(25);
});
