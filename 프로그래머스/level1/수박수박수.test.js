/*
문제 : 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수를 만들어라
자료 : 자연수 n
조건 :  
n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴
홀수자리엔 수를, 짝수자리엔 박

계획 : 
오늘 배운 것중에 array fill이 떠오르는데 더 좋은 풀이법이 있을 거 같다.
홀수자리엔 수를, 짝수자리엔 박을 넣을수 있는!

반성 :
핸드폰 번호 가리기를 풀때 repeat와 slice를 이용해서 푸는 걸 봤는데도 
다시 풀려니까 헷갈려서 다른 사람 풀이를 봤다 ㅜㅜ


*/

const solution = (n) => {
  let array = new Array(n).fill('수');

  for (let i = 0; i < n; i++) {
    if (i % 2 !== 0) {
      array[i] = '박';
    }
  }

  return array.join('');
};

// repeat로 풀어보자
const solution2 = (n) => {
  return '수박'.repeat(n / 2 + 1).slice(0, n);
};

// repeat로 풀어보자
const solution3 = (n) => {
  return '수박'.repeat(n / 2 + (n % 2) ? '수' : '');
};

test('처음풀이', () => {
  expect(solution(3)).toBe('수박수');
  expect(solution(4)).toBe('수박수박');
});

test('repeat', () => {
  expect(solution2(3)).toBe('수박수');
  // expect(solution2(4)).toBe('수박수박');
});
