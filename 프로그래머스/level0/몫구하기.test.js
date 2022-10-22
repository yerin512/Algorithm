// 문제 : 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.
// 반성 : Math.floor()와 parseInt()만 알고있었는데 다른 방법들을 보고 너무 놀랐음.

function solution(num1, num2) {
  return parseInt(num1 / num2);
}

function solution(num1, num2) {
  var answer = num1 / num2;
  return Math.floor(answer);
}

function solution(num1, num2) {
  return (num1 / num2) << 0;
}

function solution(num1, num2) {
  return Math.trunc(num1 / num2);
}

function solution(num1, num2) {
  return ~~(num1 / num2);
}
