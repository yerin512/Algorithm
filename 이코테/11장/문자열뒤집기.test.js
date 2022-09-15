/*

- 문제 : 문자열의 원소를 모두 같게 뒤집을 수 있는 최소횟수를 구하라
- 자료 : 
0과 1으로 이루어진 배열 s

- 조건: 
연속된 하나의 숫자를 뒤집을 수 있다.
어쨌든 0과 1중 한 쪽이 더 적은 쪽을 뒤집어야 한다.

- 계획:
이 문자열에서 0이  더 많은지 1이 더 많은지 비교함


- 반성

자바스크립트에서는 문자열을 나누어 배열로 저장하기 위해서 split을 사용할 수 있다.

*/

const solution = (str) => {
  const zero = str.split(/1+/gm).filter((s) => s !== '').length;
  const one = str.split(/0+/gm).filter((s) => s !== '').length;

  return Math.min(zero, one);
};

describe('문자열의 원소를 모두 같게 뒤집을 수 있는 최소횟수를 구하라', () => {
  it('정규 표현식 / 0과 1로 이루어진 문자열을 입력받으면 최소횟수를 출력함', () => {
    expect(solution('0001100')).toBe(1);
    expect(solution('11111')).toBe(0);
    expect(solution('00000001')).toBe(1);
    expect(solution('11101101')).toBe(2);
    expect(solution('11001100110011000001')).toBe(4);
  });
});
