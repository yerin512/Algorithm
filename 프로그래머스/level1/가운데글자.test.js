const solution = (s) => {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
};

describe('문자열의 가운데 글자를 구하라', () => {
  it('문자열을 인자로 주면 가운데 글자를 리턴함', () => {
    expect(solution('abcde')).toBe('c');
    expect(solution('qwer')).toBe('we');
  });
});
